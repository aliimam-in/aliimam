/**
 * Auto-generated logo component: File Type Sql Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileTypeSqlOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileTypeSqlOutlineLogo = React.forwardRef<SVGSVGElement, FileTypeSqlOutlineLogoProps>(
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
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M5 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" />
  <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
  <path d="M18 15v6h2" />
  <path d="M13 15a2 2 0 0 1 2 2v2a2 2 0 1 1 -4 0v-2a2 2 0 0 1 2 -2" />
  <path d="M14 20l1.5 1.5" />
    </svg>
  )
);

FileTypeSqlOutlineLogo.displayName = "FileTypeSqlOutlineLogo";

export const FileTypeSqlOutlineLogoMetadata = {
  id: "file-type-sql-outline",
  baseId: "file-type-sql-outline",
  variant: "default",
  name: "File Type Sql Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileTypeSqlOutlineLogo;
