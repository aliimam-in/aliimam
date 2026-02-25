/**
 * Auto-generated logo component: Arrow Curve Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowCurveRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowCurveRightOutlineLogo = React.forwardRef<SVGSVGElement, ArrowCurveRightOutlineLogoProps>(
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
      <path d="M10 7l4 -4l4 4" />
  <path d="M14 3v4.394a6.737 6.737 0 0 1 -3 5.606a6.737 6.737 0 0 0 -3 5.606v2.394" />
    </svg>
  )
);

ArrowCurveRightOutlineLogo.displayName = "ArrowCurveRightOutlineLogo";

export const ArrowCurveRightOutlineLogoMetadata = {
  id: "arrow-curve-right-outline",
  baseId: "arrow-curve-right-outline",
  variant: "default",
  name: "Arrow Curve Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowCurveRightOutlineLogo;
