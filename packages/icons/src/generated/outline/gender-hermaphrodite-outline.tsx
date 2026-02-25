/**
 * Auto-generated logo component: Gender Hermaphrodite Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GenderHermaphroditeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GenderHermaphroditeOutlineLogo = React.forwardRef<SVGSVGElement, GenderHermaphroditeOutlineLogoProps>(
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
      <path d="M12 14v7" />
  <path d="M9 18h6" />
  <path d="M12 6a4 4 0 1 1 0 8a4 4 0 0 1 0 -8" />
  <path d="M15 3a3 3 0 1 1 -6 0" />
    </svg>
  )
);

GenderHermaphroditeOutlineLogo.displayName = "GenderHermaphroditeOutlineLogo";

export const GenderHermaphroditeOutlineLogoMetadata = {
  id: "gender-hermaphrodite-outline",
  baseId: "gender-hermaphrodite-outline",
  variant: "default",
  name: "Gender Hermaphrodite Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GenderHermaphroditeOutlineLogo;
