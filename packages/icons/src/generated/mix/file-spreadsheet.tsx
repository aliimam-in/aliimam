/**
 * Auto-generated logo component: File Spreadsheet (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileSpreadsheetLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileSpreadsheetLogo = React.forwardRef<SVGSVGElement, FileSpreadsheetLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
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

FileSpreadsheetLogo.displayName = "FileSpreadsheetLogo";

export const FileSpreadsheetLogoMetadata = {
  id: "file-spreadsheet",
  baseId: "file-spreadsheet",
  variant: "default",
  name: "File Spreadsheet",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileSpreadsheetLogo;
