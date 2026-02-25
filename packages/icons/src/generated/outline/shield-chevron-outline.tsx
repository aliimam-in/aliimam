/**
 * Auto-generated logo component: Shield Chevron Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShieldChevronOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShieldChevronOutlineLogo = React.forwardRef<SVGSVGElement, ShieldChevronOutlineLogoProps>(
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
      <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
  <path d="M4 14l8 -3l8 3" />
    </svg>
  )
);

ShieldChevronOutlineLogo.displayName = "ShieldChevronOutlineLogo";

export const ShieldChevronOutlineLogoMetadata = {
  id: "shield-chevron-outline",
  baseId: "shield-chevron-outline",
  variant: "default",
  name: "Shield Chevron Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShieldChevronOutlineLogo;
