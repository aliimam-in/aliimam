/**
 * Auto-generated logo component: Hash Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HashOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HashOutlineLogo = React.forwardRef<SVGSVGElement, HashOutlineLogoProps>(
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
      <path d="M5 9l14 0" />
  <path d="M5 15l14 0" />
  <path d="M11 4l-4 16" />
  <path d="M17 4l-4 16" />
    </svg>
  )
);

HashOutlineLogo.displayName = "HashOutlineLogo";

export const HashOutlineLogoMetadata = {
  id: "hash-outline",
  baseId: "hash-outline",
  variant: "default",
  name: "Hash Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HashOutlineLogo;
