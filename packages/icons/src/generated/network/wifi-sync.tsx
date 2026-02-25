/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface WifiSyncProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const WifiSync = React.forwardRef<SVGSVGElement, WifiSyncProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M11.965 10.105v4L13.5 12.5a5 5 0 0 1 8 1.5" />
  <path d="M11.965 14.105h4" />
  <path d="M17.965 18.105h4L20.43 19.71a5 5 0 0 1-8-1.5" />
  <path d="M2 8.82a15 15 0 0 1 20 0" />
  <path d="M21.965 22.105v-4" />
  <path d="M5 12.86a10 10 0 0 1 3-2.032" />
  <path d="M8.5 16.429h.01" />
    </svg>
  )
);
WifiSync.displayName = "WifiSync";
export const WifiSyncMetadata = { id: "wifi-sync", baseId: "wifi-sync", variant: "default", name: "Wifi Sync", category: "network", tags: [], viewBox: "0 0 24 24" } as const;
export default WifiSync;
