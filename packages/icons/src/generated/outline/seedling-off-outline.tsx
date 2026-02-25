/**
 * Auto-generated logo component: Seedling Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SeedlingOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SeedlingOffOutlineLogo = React.forwardRef<SVGSVGElement, SeedlingOffOutlineLogoProps>(
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
      <path d="M11.412 7.407a6.025 6.025 0 0 0 -2.82 -2.82m-4.592 -.587h-1v2a6 6 0 0 0 6 6h3" />
  <path d="M12 14a6 6 0 0 1 .255 -1.736m1.51 -2.514a5.981 5.981 0 0 1 4.235 -1.75h3v1c0 2.158 -1.14 4.05 -2.85 5.107m-3.15 .893h-3" />
  <path d="M12 20v-8" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

SeedlingOffOutlineLogo.displayName = "SeedlingOffOutlineLogo";

export const SeedlingOffOutlineLogoMetadata = {
  id: "seedling-off-outline",
  baseId: "seedling-off-outline",
  variant: "default",
  name: "Seedling Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SeedlingOffOutlineLogo;
