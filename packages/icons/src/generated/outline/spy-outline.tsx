/**
 * Auto-generated logo component: Spy Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SpyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SpyOutlineLogo = React.forwardRef<SVGSVGElement, SpyOutlineLogoProps>(
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
      <path d="M3 11h18" />
  <path d="M5 11v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4" />
  <path d="M4 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M14 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M10 17h4" />
    </svg>
  )
);

SpyOutlineLogo.displayName = "SpyOutlineLogo";

export const SpyOutlineLogoMetadata = {
  id: "spy-outline",
  baseId: "spy-outline",
  variant: "default",
  name: "Spy Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SpyOutlineLogo;
