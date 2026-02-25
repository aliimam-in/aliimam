/**
 * Auto-generated logo component: File Pencil Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FilePencilOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FilePencilOutlineLogo = React.forwardRef<SVGSVGElement, FilePencilOutlineLogoProps>(
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
  <path d="M10 18l5 -5a1.414 1.414 0 0 0 -2 -2l-5 5v2h2" />
    </svg>
  )
);

FilePencilOutlineLogo.displayName = "FilePencilOutlineLogo";

export const FilePencilOutlineLogoMetadata = {
  id: "file-pencil-outline",
  baseId: "file-pencil-outline",
  variant: "default",
  name: "File Pencil Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FilePencilOutlineLogo;
