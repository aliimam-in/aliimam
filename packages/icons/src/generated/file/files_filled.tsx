/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FilesFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FilesFilled = React.forwardRef<SVGSVGElement, FilesFilledProps>(
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
      <path d="M11 2l3 .001v5.999a1 1 0 0 0 .883 .993l.117 .007h6v6a3 3 0 0 1 -3 3h-1v1a3 3 0 0 1 -3 3h-7a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3h1v-1a3 3 0 0 1 3 -3m-3 6h-1a1 1 0 0 0 -1 1v10a1 1 0 0 0 1 1h7a1 1 0 0 0 1 -1v-1h-4a3 3 0 0 1 -3 -3zm12.415 -1h-4.415v-4.415z" />
    </svg>
  )
);
FilesFilled.displayName = "FilesFilled";
export const FilesFilledMetadata = { 
  id: "files_filled", 
  baseId: "files", 
  variant: "filled", 
  name: "Files", 
  category: "file", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FilesFilled;
