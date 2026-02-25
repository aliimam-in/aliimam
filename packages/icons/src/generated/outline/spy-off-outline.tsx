/**
 * Auto-generated logo component: Spy Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SpyOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SpyOffOutlineLogo = React.forwardRef<SVGSVGElement, SpyOffOutlineLogoProps>(
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
      <path d="M3 11h8m4 0h6" />
  <path d="M5 11v-4c0 -.571 .16 -1.105 .437 -1.56m2.563 -1.44h8a3 3 0 0 1 3 3v4" />
  <path d="M4 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M14.88 14.877a3 3 0 1 0 4.239 4.247m.59 -3.414a3.012 3.012 0 0 0 -1.425 -1.422" />
  <path d="M10 17h4" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

SpyOffOutlineLogo.displayName = "SpyOffOutlineLogo";

export const SpyOffOutlineLogoMetadata = {
  id: "spy-off-outline",
  baseId: "spy-off-outline",
  variant: "default",
  name: "Spy Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SpyOffOutlineLogo;
