/**
 * Auto-generated logo component: Arrow Elbow Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowElbowRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowElbowRightOutlineLogo = React.forwardRef<SVGSVGElement, ArrowElbowRightOutlineLogoProps>(
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
      <path d="M21 14v-6h-6" />
  <path d="M21 8l-9 9l-9 -9" />
    </svg>
  )
);

ArrowElbowRightOutlineLogo.displayName = "ArrowElbowRightOutlineLogo";

export const ArrowElbowRightOutlineLogoMetadata = {
  id: "arrow-elbow-right-outline",
  baseId: "arrow-elbow-right-outline",
  variant: "default",
  name: "Arrow Elbow Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowElbowRightOutlineLogo;
