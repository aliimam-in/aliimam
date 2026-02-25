/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FolderDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FolderDown = React.forwardRef<SVGSVGElement, FolderDownProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
  <path d="M12 10v6" />
  <path d="m15 13-3 3-3-3" />
    </svg>
  )
);
FolderDown.displayName = "FolderDown";
export const FolderDownMetadata = { id: "folder-down", baseId: "folder-down", variant: "default", name: "Folder Down", category: "folder", tags: [], viewBox: "0 0 24 24" } as const;
export default FolderDown;
