/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FileStarFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FileStarFilled = React.forwardRef<SVGSVGElement, FileStarFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005zm-.2 9a.39 .39 0 0 0 -.351 .217l-1.086 2.193l-2.428 .352a.389 .389 0 0 0 -.217 .665l1.757 1.707l-.415 2.411a.392 .392 0 0 0 .568 .41l2.172 -1.138l2.172 1.138a.39 .39 0 0 0 .567 -.411l-.414 -2.41l1.757 -1.707a.39 .39 0 0 0 -.217 -.665l-2.428 -.352l-1.086 -2.193a.39 .39 0 0 0 -.351 -.217" />
  <path d="M19 7h-4l-.001 -4.001z" />
    </svg>
  )
);
FileStarFilled.displayName = "FileStarFilled";
export const FileStarFilledMetadata = { 
  id: "file-star_filled", 
  baseId: "file-star", 
  variant: "filled", 
  name: "File Star", 
  category: "file", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FileStarFilled;
