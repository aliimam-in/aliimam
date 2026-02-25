/**
 * Auto-generated logo component: File Spreadsheet Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileSpreadsheetOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileSpreadsheetOutlineLogo = React.forwardRef<SVGSVGElement, FileSpreadsheetOutlineLogoProps>(
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
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
  <path d="M8 11h8v7h-8l0 -7" />
  <path d="M8 15h8" />
  <path d="M11 11v7" />
    </svg>
  )
);

FileSpreadsheetOutlineLogo.displayName = "FileSpreadsheetOutlineLogo";

export const FileSpreadsheetOutlineLogoMetadata = {
  id: "file-spreadsheet-outline",
  baseId: "file-spreadsheet-outline",
  variant: "default",
  name: "File Spreadsheet Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileSpreadsheetOutlineLogo;
