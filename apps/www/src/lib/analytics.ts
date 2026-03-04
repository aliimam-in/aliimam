import { track } from "@vercel/analytics"


// ============================================================================
// Types & Interfaces
// ============================================================================

export type DeviceType = "mobile" | "desktop";

export type ShareMethod = "native" | "clipboard";
export type AIProvider = "v0" | "chatgpt" | "claude" | "scira";
export type ExportMethod = "view" | "ai_share";
export type FolderAction = "open" | "close";
export type MobileTab = "files" | "code" | "info";

// Base properties included in all events
export interface BaseEventProperties {
  // Registry context
  registry_owner?: string;
  registry_name?: string;
  category?: string;
  item_name?: string;
  item_type?: string;

  // Device context
  device_type: DeviceType;
  viewport_width: number;
  viewport_height: number;

  // Session
  session_id: string;
  timestamp: string;
}

// Event-specific properties
export interface FileSelectedProperties {
  file_path: string;
  file_type: string;
  is_multi_file_item: boolean;
  total_files_in_item: number;
}

export interface CodeCopiedProperties {
  file_path: string;
  code_length: number;
  has_content: boolean;
}

export interface ShareClickedProperties {
  share_method: ShareMethod;
  file_path?: string;
}

export interface SessionDurationProperties {
  duration_seconds: number;
  files_viewed: number;
  code_copied_count: number;
  interactions_count: number;
}

export interface AIClickedProperties {
  ai_provider: AIProvider;
  file_path?: string;
}

export interface SearchUsedProperties {
  search_query: string;
  results_count: number;
  total_items: number;
}

export interface FolderToggledProperties {
  folder_path: string;
  action: FolderAction;
  depth_level: number;
}

export interface MobileTabSwitchedProperties {
  from_tab: MobileTab;
  to_tab: MobileTab;
  has_file_selected: boolean;
}

export interface PathCopiedProperties {
  path: string;
  file_index: number;
  total_files: number;
}

export interface MarkdownExportedProperties {
  export_method: ExportMethod;
  file_path?: string;
}

export interface RegistryVisitProperties {
  destination: "registry" | "repository";
  registry_url?: string;
  github_url?: string;
}

export type SearchResultType = "registry" | "item";
export type HomeTab = "components" | "tools";

export interface SearchPerformedProperties {
  search_query: string;
  active_tab: HomeTab;
  registry_results_count: number;
  item_results_count: number;
}

export interface SearchResultClickedProperties {
  search_query: string;
  result_type: SearchResultType;
  result_name: string;
  result_position: number;
}

// ============================================================================
// Event Names
// ============================================================================

export const ANALYTICS_EVENTS = {
  // Core metrics
  FILE_SELECTED: "ide.file.selected",
  CODE_COPIED: "ide.code.copied",
  SHARE_CLICKED: "ide.share.clicked",
  SESSION_DURATION: "ide.session.duration",

  // Feature adoption
  AI_CLICKED: "ide.ai.clicked",
  SEARCH_USED: "ide.search.used",
  FOLDER_TOGGLED: "ide.folder.toggled",
  MOBILE_TAB_SWITCHED: "ide.mobile.tab_switched",
  PATH_COPIED: "ide.path.copied",
  MARKDOWN_EXPORTED: "ide.markdown.exported",
  REGISTRY_VISIT: "ide.registry.visit",

  // Home search
  HOME_SEARCH_PERFORMED: "home.search.performed",
  HOME_SEARCH_RESULT_CLICKED: "home.search.result_clicked",
} as const;

// ============================================================================
// Debounce Utility
// ============================================================================

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

// ============================================================================
// Analytics Class
// ============================================================================

class Analytics {
  #sessionId: string;
  #sessionStartTime: number;
  #filesViewed: Set<string>;
  #codeCopiedCount: number;
  #interactionsCount: number;
  #isDevelopment: boolean;
  #isClient: boolean;

  constructor() {
    this.#isClient = typeof window !== "undefined";
    this.#isDevelopment = process.env.NODE_ENV === "development";
    this.#sessionId = this.#generateSessionId();
    this.#sessionStartTime = Date.now();
    this.#filesViewed = new Set();
    this.#codeCopiedCount = 0;
    this.#interactionsCount = 0;

    if (this.#isClient) {
      this.#initializeSessionTracking();
    }
  }

  #generateSessionId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  #initializeSessionTracking(): void {
    // Track session duration on page unload
    window.addEventListener("beforeunload", () => {
      this.trackSessionDuration();
    });

    // Track session duration on page visibility change (mobile scenarios)
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        this.trackSessionDuration();
      }
    });
  }

  #getDeviceType(): DeviceType {
    if (!this.#isClient) return "desktop";
    return window.innerWidth < 768 ? "mobile" : "desktop";
  }

  #getBaseProperties(): BaseEventProperties {
    return {
      device_type: this.#getDeviceType(),
      viewport_width: this.#isClient ? window.innerWidth : 0,
      viewport_height: this.#isClient ? window.innerHeight : 0,
      session_id: this.#sessionId,
      timestamp: new Date().toISOString(),
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  #logEvent(eventName: string, properties: Record<string, any>): void {
    if (this.#isDevelopment) {
      console.log("[Analytics]", eventName, properties);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  #trackEvent(eventName: string, properties: Record<string, any>): void {
    if (!this.#isClient) return;

    const fullProperties = {
      ...this.#getBaseProperties(),
      ...properties,
    };

    this.#logEvent(eventName, fullProperties);

    // Only send to Vercel Analytics in production
    if (!this.#isDevelopment) {
      track(eventName, fullProperties);
    }

    // Update interaction count
    this.#interactionsCount++;
  }

  // ============================================================================
  // Public Tracking Methods
  // ============================================================================

  trackFileSelected(properties: FileSelectedProperties & Partial<BaseEventProperties>): void {
    this.#filesViewed.add(properties.file_path);
    this.#trackEvent(ANALYTICS_EVENTS.FILE_SELECTED, properties);
  }

  trackCodeCopied(properties: CodeCopiedProperties & Partial<BaseEventProperties>): void {
    this.#codeCopiedCount++;
    this.#trackEvent(ANALYTICS_EVENTS.CODE_COPIED, properties);
  }

  trackShareClicked(properties: ShareClickedProperties & Partial<BaseEventProperties>): void {
    this.#trackEvent(ANALYTICS_EVENTS.SHARE_CLICKED, properties);
  }

  trackSessionDuration(): void {
    const durationSeconds = Math.floor((Date.now() - this.#sessionStartTime) / 1000);

    // Only track if session was meaningful (>5 seconds)
    if (durationSeconds < 5) return;

    const properties: SessionDurationProperties = {
      duration_seconds: durationSeconds,
      files_viewed: this.#filesViewed.size,
      code_copied_count: this.#codeCopiedCount,
      interactions_count: this.#interactionsCount,
    };

    this.#trackEvent(ANALYTICS_EVENTS.SESSION_DURATION, properties);
  }

  trackAIClicked(properties: AIClickedProperties & Partial<BaseEventProperties>): void {
    this.#trackEvent(ANALYTICS_EVENTS.AI_CLICKED, properties);
  }

  trackSearchUsed(properties: SearchUsedProperties & Partial<BaseEventProperties>): void {
    this.#trackEvent(ANALYTICS_EVENTS.SEARCH_USED, properties);
  }

  trackFolderToggled(properties: FolderToggledProperties & Partial<BaseEventProperties>): void {
    this.#trackEvent(ANALYTICS_EVENTS.FOLDER_TOGGLED, properties);
  }

  trackMobileTabSwitched(properties: MobileTabSwitchedProperties & Partial<BaseEventProperties>): void {
    this.#trackEvent(ANALYTICS_EVENTS.MOBILE_TAB_SWITCHED, properties);
  }

  trackPathCopied(properties: PathCopiedProperties & Partial<BaseEventProperties>): void {
    this.#trackEvent(ANALYTICS_EVENTS.PATH_COPIED, properties);
  }

  trackMarkdownExported(properties: MarkdownExportedProperties & Partial<BaseEventProperties>): void {
    this.#trackEvent(ANALYTICS_EVENTS.MARKDOWN_EXPORTED, properties);
  }

  trackRegistryVisit(properties: RegistryVisitProperties & Partial<BaseEventProperties>): void {
    this.#trackEvent(ANALYTICS_EVENTS.REGISTRY_VISIT, properties);
  }

  trackSearchPerformed(properties: SearchPerformedProperties & Partial<BaseEventProperties>): void {
    this.#trackEvent(ANALYTICS_EVENTS.HOME_SEARCH_PERFORMED, properties);
  }

  trackSearchResultClicked(properties: SearchResultClickedProperties & Partial<BaseEventProperties>): void {
    this.#trackEvent(ANALYTICS_EVENTS.HOME_SEARCH_RESULT_CLICKED, properties);
  }
}

// ============================================================================
// Singleton Instance
// ============================================================================

let analyticsInstance: Analytics | null = null;

export function getAnalytics(): Analytics {
  if (!analyticsInstance) {
    analyticsInstance = new Analytics();
  }
  return analyticsInstance;
}

// Default export for convenience
export default getAnalytics;


export function trackComponentInstall(
  componentName: string,
  metadata?: Record<string, unknown>
) {
  track("component_install", {
    component: componentName,
    source: "cli",
    timestamp: new Date().toISOString(),
    ...metadata,
  })
}

export function trackComponentView(
  componentName: string,
  metadata?: Record<string, unknown>
) {
  track("component_view", {
    component: componentName,
    source: "web",
    timestamp: new Date().toISOString(),
    ...metadata,
  })
}

export function trackComponentCopy(
  componentName: string,
  metadata?: Record<string, unknown>
) {
  track("component_copy", {
    component: componentName,
    source: "web",
    timestamp: new Date().toISOString(),
    ...metadata,
  })
}
