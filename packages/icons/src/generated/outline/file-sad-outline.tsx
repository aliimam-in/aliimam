/**
 * Auto-generated logo component: File Sad Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileSadOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileSadOutlineLogo = React.forwardRef<SVGSVGElement, FileSadOutlineLogoProps>(
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
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2m-7 -7h.01m3.99 0h.01" />
  <path d="M10 18a3.5 3.5 0 0 1 4 0" />
    </svg>
  )
);

FileSadOutlineLogo.displayName = "FileSadOutlineLogo";

export const FileSadOutlineLogoMetadata = {
  id: "file-sad-outline",
  baseId: "file-sad-outline",
  variant: "default",
  name: "File Sad Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileSadOutlineLogo;
