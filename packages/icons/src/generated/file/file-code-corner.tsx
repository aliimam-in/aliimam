/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FileCodeCornerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FileCodeCorner = React.forwardRef<SVGSVGElement, FileCodeCornerProps>(
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
      <path d="M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="m5 16-3 3 3 3" />
  <path d="m9 22 3-3-3-3" />
    </svg>
  )
);
FileCodeCorner.displayName = "FileCodeCorner";
export const FileCodeCornerMetadata = { 
  id: "file-code-corner", 
  baseId: "file-code-corner", 
  variant: "default", 
  name: "File Code Corner", 
  category: "file", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FileCodeCorner;
