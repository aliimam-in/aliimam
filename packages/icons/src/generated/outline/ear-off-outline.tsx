/**
 * Auto-generated logo component: Ear Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EarOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EarOffOutlineLogo = React.forwardRef<SVGSVGElement, EarOffOutlineLogoProps>(
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
      <path d="M6 10c0 -1.146 .277 -2.245 .78 -3.219m1.792 -2.208a7 7 0 0 1 10.428 9.027a10 10 0 0 1 -.633 .762m-2.045 1.96a8 8 0 0 0 -1.322 2.278a4.5 4.5 0 0 1 -6.8 1.4" />
  <path d="M11.42 7.414a3 3 0 0 1 4.131 4.13" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

EarOffOutlineLogo.displayName = "EarOffOutlineLogo";

export const EarOffOutlineLogoMetadata = {
  id: "ear-off-outline",
  baseId: "ear-off-outline",
  variant: "default",
  name: "Ear Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EarOffOutlineLogo;
