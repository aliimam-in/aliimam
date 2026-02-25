/**
 * Auto-generated logo component: Corner Down Right Double Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CornerDownRightDoubleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CornerDownRightDoubleOutlineLogo = React.forwardRef<SVGSVGElement, CornerDownRightDoubleOutlineLogoProps>(
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
      <path d="M4 5v6a3 3 0 0 0 3 3h7" />
  <path d="M10 10l4 4l-4 4m5 -8l4 4l-4 4" />
    </svg>
  )
);

CornerDownRightDoubleOutlineLogo.displayName = "CornerDownRightDoubleOutlineLogo";

export const CornerDownRightDoubleOutlineLogoMetadata = {
  id: "corner-down-right-double-outline",
  baseId: "corner-down-right-double-outline",
  variant: "default",
  name: "Corner Down Right Double Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CornerDownRightDoubleOutlineLogo;
