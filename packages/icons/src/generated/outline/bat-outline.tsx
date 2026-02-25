/**
 * Auto-generated logo component: Bat Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BatOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BatOutlineLogo = React.forwardRef<SVGSVGElement, BatOutlineLogoProps>(
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
      <path d="M17 16c.74 -2.286 2.778 -3.762 5 -3c-.173 -2.595 .13 -5.314 -2 -7.5c-1.708 2.648 -3.358 2.557 -5 2.5v-4l-3 2l-3 -2v4c-1.642 .057 -3.292 .148 -5 -2.5c-2.13 2.186 -1.827 4.905 -2 7.5c2.222 -.762 4.26 .714 5 3c2.593 0 3.889 .952 5 4c1.111 -3.048 2.407 -4 5 -4" />
  <path d="M9 8a3 3 0 0 0 6 0" />
    </svg>
  )
);

BatOutlineLogo.displayName = "BatOutlineLogo";

export const BatOutlineLogoMetadata = {
  id: "bat-outline",
  baseId: "bat-outline",
  variant: "default",
  name: "Bat Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BatOutlineLogo;
