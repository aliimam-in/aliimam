/**
 * Auto-generated logo component: Butterfly Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ButterflyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ButterflyOutlineLogo = React.forwardRef<SVGSVGElement, ButterflyOutlineLogoProps>(
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
      <path d="M12 18.176a3 3 0 1 1 -4.953 -2.449l-.025 .023a4.502 4.502 0 0 1 1.483 -8.75c1.414 0 2.675 .652 3.5 1.671a4.5 4.5 0 1 1 4.983 7.079a3 3 0 1 1 -4.983 2.25l-.005 .176" />
  <path d="M12 19v-10" />
  <path d="M9 3l3 2l3 -2" />
    </svg>
  )
);

ButterflyOutlineLogo.displayName = "ButterflyOutlineLogo";

export const ButterflyOutlineLogoMetadata = {
  id: "butterfly-outline",
  baseId: "butterfly-outline",
  variant: "default",
  name: "Butterfly Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ButterflyOutlineLogo;
