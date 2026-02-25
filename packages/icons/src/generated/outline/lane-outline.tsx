/**
 * Auto-generated logo component: Lane Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LaneOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LaneOutlineLogo = React.forwardRef<SVGSVGElement, LaneOutlineLogoProps>(
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
      <path d="M4 6v13" />
  <path d="M20 6v13" />
    </svg>
  )
);

LaneOutlineLogo.displayName = "LaneOutlineLogo";

export const LaneOutlineLogoMetadata = {
  id: "lane-outline",
  baseId: "lane-outline",
  variant: "default",
  name: "Lane Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LaneOutlineLogo;
