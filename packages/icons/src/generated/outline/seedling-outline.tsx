/**
 * Auto-generated logo component: Seedling Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SeedlingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SeedlingOutlineLogo = React.forwardRef<SVGSVGElement, SeedlingOutlineLogoProps>(
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
      <path d="M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3" />
  <path d="M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3" />
  <path d="M12 20l0 -10" />
    </svg>
  )
);

SeedlingOutlineLogo.displayName = "SeedlingOutlineLogo";

export const SeedlingOutlineLogoMetadata = {
  id: "seedling-outline",
  baseId: "seedling-outline",
  variant: "default",
  name: "Seedling Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SeedlingOutlineLogo;
