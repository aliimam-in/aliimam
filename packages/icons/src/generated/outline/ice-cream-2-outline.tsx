/**
 * Auto-generated logo component: Ice Cream 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface IceCream2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const IceCream2OutlineLogo = React.forwardRef<SVGSVGElement, IceCream2OutlineLogoProps>(
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
      <path d="M17.657 11a6 6 0 1 0 -11.315 0" />
  <path d="M6.342 11l5.658 11l5.657 -11l-11.315 0" />
    </svg>
  )
);

IceCream2OutlineLogo.displayName = "IceCream2OutlineLogo";

export const IceCream2OutlineLogoMetadata = {
  id: "ice-cream-2-outline",
  baseId: "ice-cream-2-outline",
  variant: "default",
  name: "Ice Cream 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default IceCream2OutlineLogo;
