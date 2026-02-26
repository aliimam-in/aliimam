/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FileTypographyFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FileTypographyFilled = React.forwardRef<SVGSVGElement, FileTypographyFilledProps>(
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
      <path d="M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005zm3 9h-6a1 1 0 0 0 -1 1v1a1 1 0 0 0 2 0h1v5a1 1 0 0 0 0 2h2a1 1 0 0 0 0 -2v-5h1a1 1 0 0 0 2 0v-1a1 1 0 0 0 -1 -1" />
  <path d="M19 7h-4l-.001 -4.001z" />
    </svg>
  )
);
FileTypographyFilled.displayName = "FileTypographyFilled";
export const FileTypographyFilledMetadata = { 
  id: "file-typography_filled", 
  baseId: "file-typography", 
  variant: "filled", 
  name: "File Typography", 
  category: "file", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FileTypographyFilled;
