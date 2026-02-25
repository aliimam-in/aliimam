/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FolderRootProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FolderRoot = React.forwardRef<SVGSVGElement, FolderRootProps>(
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
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
  <circle cx="12" cy="13" r="2" />
  <path d="M12 15v5" />
    </svg>
  )
);
FolderRoot.displayName = "FolderRoot";
export const FolderRootMetadata = { 
  id: "folder-root", 
  baseId: "folder-root", 
  variant: "default", 
  name: "Folder Root", 
  category: "folder", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FolderRoot;
