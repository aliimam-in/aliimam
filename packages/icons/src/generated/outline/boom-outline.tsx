/**
 * Auto-generated logo component: Boom Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BoomOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BoomOutlineLogo = React.forwardRef<SVGSVGElement, BoomOutlineLogoProps>(
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
      <path d="M3 9.662c2 2.338 2 4.338 0 6.338c3 .5 4.5 1 5 4c2 -3 6 -4 9 0c0 -3 1 -4 4 -4.004q -3 -2.995 0 -5.996c-3 0 -5 -2 -5 -5c-2 4 -5 3 -7.5 -1c-.5 3 -2.5 5 -5.5 5.662" />
    </svg>
  )
);

BoomOutlineLogo.displayName = "BoomOutlineLogo";

export const BoomOutlineLogoMetadata = {
  id: "boom-outline",
  baseId: "boom-outline",
  variant: "default",
  name: "Boom Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BoomOutlineLogo;
