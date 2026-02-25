/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FolderCodeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FolderCode = React.forwardRef<SVGSVGElement, FolderCodeProps>(
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
      <path d="M10 10.5 8 13l2 2.5" />
  <path d="m14 10.5 2 2.5-2 2.5" />
  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z" />
    </svg>
  )
);
FolderCode.displayName = "FolderCode";
export const FolderCodeMetadata = { 
  id: "folder-code", 
  baseId: "folder-code", 
  variant: "default", 
  name: "Folder Code", 
  category: "folder", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FolderCode;
