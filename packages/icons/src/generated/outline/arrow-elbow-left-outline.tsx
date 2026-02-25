/**
 * Auto-generated logo component: Arrow Elbow Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowElbowLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowElbowLeftOutlineLogo = React.forwardRef<SVGSVGElement, ArrowElbowLeftOutlineLogoProps>(
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
      <path d="M3 14v-6h6" />
  <path d="M3 8l9 9l9 -9" />
    </svg>
  )
);

ArrowElbowLeftOutlineLogo.displayName = "ArrowElbowLeftOutlineLogo";

export const ArrowElbowLeftOutlineLogoMetadata = {
  id: "arrow-elbow-left-outline",
  baseId: "arrow-elbow-left-outline",
  variant: "default",
  name: "Arrow Elbow Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowElbowLeftOutlineLogo;
