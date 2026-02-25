/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FolderKeyProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FolderKey = React.forwardRef<SVGSVGElement, FolderKeyProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M13 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.36" />
  <path d="M19 12v6" />
  <path d="M19 14h2" />
  <circle cx="19" cy="20" r="2" />
    </svg>
  )
);
FolderKey.displayName = "FolderKey";
export const FolderKeyMetadata = { id: "folder-key", baseId: "folder-key", variant: "default", name: "Folder Key", category: "folder", tags: [], viewBox: "0 0 24 24" } as const;
export default FolderKey;
