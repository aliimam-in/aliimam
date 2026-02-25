/**
 * Auto-generated logo component: File Database Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileDatabaseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileDatabaseOutlineLogo = React.forwardRef<SVGSVGElement, FileDatabaseOutlineLogoProps>(
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
      <path d="M8 12.75a4 1.75 0 1 0 8 0a4 1.75 0 1 0 -8 0" />
  <path d="M8 12.5v3.75c0 .966 1.79 1.75 4 1.75s4 -.784 4 -1.75v-3.75" />
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
    </svg>
  )
);

FileDatabaseOutlineLogo.displayName = "FileDatabaseOutlineLogo";

export const FileDatabaseOutlineLogoMetadata = {
  id: "file-database-outline",
  baseId: "file-database-outline",
  variant: "default",
  name: "File Database Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileDatabaseOutlineLogo;
