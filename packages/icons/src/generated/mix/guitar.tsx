/**
 * Auto-generated logo component: Guitar (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GuitarLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GuitarLogo = React.forwardRef<SVGSVGElement, GuitarLogoProps>(
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
      <path d="m11.9 12.1 4.514-4.514" />
  <path d="M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z" />
  <path d="m6 16 2 2" />
  <path d="M8.23 9.85A3 3 0 0 1 11 8a5 5 0 0 1 5 5 3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4 6 6 0 0 1-6-6 4 4 0 0 1 4-4 2 2 0 0 0 1.85-1.23z" />
    </svg>
  )
);

GuitarLogo.displayName = "GuitarLogo";

export const GuitarLogoMetadata = {
  id: "guitar",
  baseId: "guitar",
  variant: "default",
  name: "Guitar",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GuitarLogo;
