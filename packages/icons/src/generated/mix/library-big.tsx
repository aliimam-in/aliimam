/**
 * Auto-generated logo component: Library Big (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LibraryBigLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LibraryBigLogo = React.forwardRef<SVGSVGElement, LibraryBigLogoProps>(
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
      <rect width="8" height="18" x="3" y="3" rx="1" />
  <path d="M7 3v18" />
  <path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z" />
    </svg>
  )
);

LibraryBigLogo.displayName = "LibraryBigLogo";

export const LibraryBigLogoMetadata = {
  id: "library-big",
  baseId: "library-big",
  variant: "default",
  name: "Library Big",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LibraryBigLogo;
