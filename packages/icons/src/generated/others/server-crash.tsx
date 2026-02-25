/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ServerCrashProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ServerCrash = React.forwardRef<SVGSVGElement, ServerCrashProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
  <path d="M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2" />
  <path d="M6 6h.01" />
  <path d="M6 18h.01" />
  <path d="m13 6-4 6h6l-4 6" />
    </svg>
  )
);
ServerCrash.displayName = "ServerCrash";
export const ServerCrashMetadata = { id: "server-crash", baseId: "server-crash", variant: "default", name: "Server Crash", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default ServerCrash;
