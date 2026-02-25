/**
 * Auto-generated logo component: Dots Circle Horizontal Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DotsCircleHorizontalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DotsCircleHorizontalOutlineLogo = React.forwardRef<SVGSVGElement, DotsCircleHorizontalOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M8 12l0 .01" />
  <path d="M12 12l0 .01" />
  <path d="M16 12l0 .01" />
    </svg>
  )
);

DotsCircleHorizontalOutlineLogo.displayName = "DotsCircleHorizontalOutlineLogo";

export const DotsCircleHorizontalOutlineLogoMetadata = {
  id: "dots-circle-horizontal-outline",
  baseId: "dots-circle-horizontal-outline",
  variant: "default",
  name: "Dots Circle Horizontal Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DotsCircleHorizontalOutlineLogo;
