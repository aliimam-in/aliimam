/**
 * Auto-generated logo component: Ice Cream Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface IceCreamOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const IceCreamOffOutlineLogo = React.forwardRef<SVGSVGElement, IceCreamOffOutlineLogoProps>(
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
      <path d="M12 21.5v-4.5" />
  <path d="M8 8v9h8v-1m0 -4v-5a4 4 0 0 0 -7.277 -2.294" />
  <path d="M8 10.5l1.74 -.76m2.79 -1.222l3.47 -1.518" />
  <path d="M8 14.5l4.488 -1.964" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

IceCreamOffOutlineLogo.displayName = "IceCreamOffOutlineLogo";

export const IceCreamOffOutlineLogoMetadata = {
  id: "ice-cream-off-outline",
  baseId: "ice-cream-off-outline",
  variant: "default",
  name: "Ice Cream Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default IceCreamOffOutlineLogo;
