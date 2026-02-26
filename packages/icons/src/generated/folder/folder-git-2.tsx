/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FolderGit2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FolderGit2 = React.forwardRef<SVGSVGElement, FolderGit2Props>(
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
      <path d="M18 19a5 5 0 0 1-5-5v8" />
  <path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5" />
  <circle cx="13" cy="12" r="2" />
  <circle cx="20" cy="19" r="2" />
    </svg>
  )
);
FolderGit2.displayName = "FolderGit2";
export const FolderGit2Metadata = { 
  id: "folder-git-2", 
  baseId: "folder-git-2", 
  variant: "default", 
  name: "Folder Git 2", 
  category: "folder", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FolderGit2;
