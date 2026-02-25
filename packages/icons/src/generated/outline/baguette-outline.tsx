/**
 * Auto-generated logo component: Baguette Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BaguetteOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BaguetteOutlineLogo = React.forwardRef<SVGSVGElement, BaguetteOutlineLogoProps>(
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
      <path d="M5.628 11.283l5.644 -5.637c2.665 -2.663 5.924 -3.747 8.663 -1.205l.188 .181a2.987 2.987 0 0 1 0 4.228l-11.287 11.274a3 3 0 0 1 -4.089 .135l-.143 -.135c-2.728 -2.724 -1.704 -6.117 1.024 -8.841" />
  <path d="M9.5 7.5l1.5 3.5" />
  <path d="M6.5 10.5l1.5 3.5" />
  <path d="M12.5 4.5l1.5 3.5" />
    </svg>
  )
);

BaguetteOutlineLogo.displayName = "BaguetteOutlineLogo";

export const BaguetteOutlineLogoMetadata = {
  id: "baguette-outline",
  baseId: "baguette-outline",
  variant: "default",
  name: "Baguette Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BaguetteOutlineLogo;
