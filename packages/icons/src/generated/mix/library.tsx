/**
 * Auto-generated logo component: Library (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LibraryLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LibraryLogo = React.forwardRef<SVGSVGElement, LibraryLogoProps>(
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
      <path d="m16 6 4 14" />
  <path d="M12 6v14" />
  <path d="M8 8v12" />
  <path d="M4 4v16" />
    </svg>
  )
);

LibraryLogo.displayName = "LibraryLogo";

export const LibraryLogoMetadata = {
  id: "library",
  baseId: "library",
  variant: "default",
  name: "Library",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LibraryLogo;
