/**
 * Auto-generated logo component: View 360 Arrow Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface View360ArrowOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const View360ArrowOutlineLogo = React.forwardRef<SVGSVGElement, View360ArrowOutlineLogoProps>(
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
      <path d="M17 15.328c2.414 -.718 4 -1.94 4 -3.328c0 -2.21 -4.03 -4 -9 -4s-9 1.79 -9 4s4.03 4 9 4" />
  <path d="M9 13l3 3l-3 3" />
    </svg>
  )
);

View360ArrowOutlineLogo.displayName = "View360ArrowOutlineLogo";

export const View360ArrowOutlineLogoMetadata = {
  id: "view-360-arrow-outline",
  baseId: "view-360-arrow-outline",
  variant: "default",
  name: "View 360 Arrow Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default View360ArrowOutlineLogo;
