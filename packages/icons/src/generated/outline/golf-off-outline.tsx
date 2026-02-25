/**
 * Auto-generated logo component: Golf Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GolfOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GolfOffOutlineLogo = React.forwardRef<SVGSVGElement, GolfOffOutlineLogoProps>(
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
      <path d="M12 18v-6m0 -4v-5l7 4l-5.07 2.897" />
  <path d="M9 17.67c-.62 .36 -1 .82 -1 1.33c0 1.1 1.8 2 4 2s4 -.9 4 -2c0 -.5 -.38 -.97 -1 -1.33" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

GolfOffOutlineLogo.displayName = "GolfOffOutlineLogo";

export const GolfOffOutlineLogoMetadata = {
  id: "golf-off-outline",
  baseId: "golf-off-outline",
  variant: "default",
  name: "Golf Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GolfOffOutlineLogo;
