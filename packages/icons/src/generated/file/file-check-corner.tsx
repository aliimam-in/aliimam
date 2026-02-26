/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FileCheckCornerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FileCheckCorner = React.forwardRef<SVGSVGElement, FileCheckCornerProps>(
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
      <path d="M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="m14 20 2 2 4-4" />
    </svg>
  )
);
FileCheckCorner.displayName = "FileCheckCorner";
export const FileCheckCornerMetadata = { 
  id: "file-check-corner", 
  baseId: "file-check-corner", 
  variant: "default", 
  name: "File Check Corner", 
  category: "file", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FileCheckCorner;
