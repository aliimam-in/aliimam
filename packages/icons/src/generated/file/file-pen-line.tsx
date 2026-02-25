/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FilePenLineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FilePenLine = React.forwardRef<SVGSVGElement, FilePenLineProps>(
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
      <path d="M14.364 13.634a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506l4.013-4.009a1 1 0 0 0-3.004-3.004z" />
  <path d="M14.487 7.858A1 1 0 0 1 14 7V2" />
  <path d="M20 19.645V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l2.516 2.516" />
  <path d="M8 18h1" />
    </svg>
  )
);
FilePenLine.displayName = "FilePenLine";
export const FilePenLineMetadata = { 
  id: "file-pen-line", 
  baseId: "file-pen-line", 
  variant: "default", 
  name: "File Pen Line", 
  category: "file", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FilePenLine;
