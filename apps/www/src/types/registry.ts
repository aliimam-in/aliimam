export type DirectoryEntry = {
    name: string;
    description: string;
    url: string;
    github_url?: string;
    github_profile?: string;
    registry_url?: string;
  };
  
  export type CategoryStat = {
    slug: string;
    count: number;
  };
  
  export type RegistryStats = {
    totalItems: number;
    categories: CategoryStat[];
    topItems: string[];
  };
  
  export type GitHubStats = {
    stars: number;
    lastCommit: string; // ISO date
    fetchedAt: string; // ISO date — for cache expiry
  };
  
  export type AffiliateConfig = {
    url: string;           // Matches DirectoryEntry.url — the join key
    affiliate_url: string; // URL with tracking params
    label: string;         // Display name
    program: string;       // Program identifier for bulk operations
    logo_url?: string;     // Avatar for entries without github_profile
  };