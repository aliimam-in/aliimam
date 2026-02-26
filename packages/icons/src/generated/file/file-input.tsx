/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FileInputProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FileInput = React.forwardRef<SVGSVGElement, FileInputProps>(
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
      <path d="M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M2 15h10" />
  <path d="m9 18 3-3-3-3" />
    </svg>
  )
);
FileInput.displayName = "FileInput";
export const FileInputMetadata = { 
  id: "file-input", 
  baseId: "file-input", 
  variant: "default", 
  name: "File Input", 
  category: "file", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FileInput;
