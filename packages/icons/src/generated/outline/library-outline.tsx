/**
 * Auto-generated logo component: Library Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LibraryOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LibraryOutlineLogo = React.forwardRef<SVGSVGElement, LibraryOutlineLogoProps>(
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
      <path d="M7 5.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666" />
  <path d="M4.012 7.26a2.005 2.005 0 0 0 -1.012 1.737v10c0 1.1 .9 2 2 2h10c.75 0 1.158 -.385 1.5 -1" />
  <path d="M11 7h5" />
  <path d="M11 10h6" />
  <path d="M11 13h3" />
    </svg>
  )
);

LibraryOutlineLogo.displayName = "LibraryOutlineLogo";

export const LibraryOutlineLogoMetadata = {
  id: "library-outline",
  baseId: "library-outline",
  variant: "default",
  name: "Library Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LibraryOutlineLogo;
