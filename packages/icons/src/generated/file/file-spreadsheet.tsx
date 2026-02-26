/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FileSpreadsheetProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FileSpreadsheet = React.forwardRef<SVGSVGElement, FileSpreadsheetProps>(
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
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M8 13h2" />
  <path d="M14 13h2" />
  <path d="M8 17h2" />
  <path d="M14 17h2" />
    </svg>
  )
);
FileSpreadsheet.displayName = "FileSpreadsheet";
export const FileSpreadsheetMetadata = { 
  id: "file-spreadsheet", 
  baseId: "file-spreadsheet", 
  variant: "default", 
  name: "File Spreadsheet", 
  category: "file", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FileSpreadsheet;
