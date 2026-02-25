/**
 * Auto-generated logo component: File Cv Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileCvOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileCvOutlineLogo = React.forwardRef<SVGSVGElement, FileCvOutlineLogoProps>(
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
  <path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" />
  <path d="M13 11l1.5 6l1.5 -6" />
    </svg>
  )
);

FileCvOutlineLogo.displayName = "FileCvOutlineLogo";

export const FileCvOutlineLogoMetadata = {
  id: "file-cv-outline",
  baseId: "file-cv-outline",
  variant: "default",
  name: "File Cv Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileCvOutlineLogo;
