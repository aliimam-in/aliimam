/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FileMinusCornerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FileMinusCorner = React.forwardRef<SVGSVGElement, FileMinusCornerProps>(
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
      <path d="M20 14V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M14 18h6" />
    </svg>
  )
);
FileMinusCorner.displayName = "FileMinusCorner";
export const FileMinusCornerMetadata = { 
  id: "file-minus-corner", 
  baseId: "file-minus-corner", 
  variant: "default", 
  name: "File Minus Corner", 
  category: "file", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FileMinusCorner;
