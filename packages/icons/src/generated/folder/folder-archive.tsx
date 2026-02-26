/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FolderArchiveProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FolderArchive = React.forwardRef<SVGSVGElement, FolderArchiveProps>(
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
      <circle cx="15" cy="19" r="2" />
  <path d="M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1" />
  <path d="M15 11v-1" />
  <path d="M15 17v-2" />
    </svg>
  )
);
FolderArchive.displayName = "FolderArchive";
export const FolderArchiveMetadata = { 
  id: "folder-archive", 
  baseId: "folder-archive", 
  variant: "default", 
  name: "Folder Archive", 
  category: "folder", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FolderArchive;
