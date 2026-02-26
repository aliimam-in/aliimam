/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FolderOpenDotProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FolderOpenDot = React.forwardRef<SVGSVGElement, FolderOpenDotProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2" />
  <circle cx="14" cy="15" r="1" />
    </svg>
  )
);
FolderOpenDot.displayName = "FolderOpenDot";
export const FolderOpenDotMetadata = { 
  id: "folder-open-dot", 
  baseId: "folder-open-dot", 
  variant: "default", 
  name: "Folder Open Dot", 
  category: "folder", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FolderOpenDot;
