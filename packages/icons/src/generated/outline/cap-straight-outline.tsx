/**
 * Auto-generated logo component: Cap Straight Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CapStraightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CapStraightOutlineLogo = React.forwardRef<SVGSVGElement, CapStraightOutlineLogoProps>(
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
      <path d="M8 12a2 2 0 1 1 -4 0a2 2 0 0 1 4 0" />
  <path d="M8 12h12" />
  <path d="M20 6h-12a2 2 0 0 0 -2 2v2" />
  <path d="M6 14v2a2 2 0 0 0 2 2h12" />
    </svg>
  )
);

CapStraightOutlineLogo.displayName = "CapStraightOutlineLogo";

export const CapStraightOutlineLogoMetadata = {
  id: "cap-straight-outline",
  baseId: "cap-straight-outline",
  variant: "default",
  name: "Cap Straight Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CapStraightOutlineLogo;
