/**
 * Auto-generated logo component: Road Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RoadOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RoadOffOutlineLogo = React.forwardRef<SVGSVGElement, RoadOffOutlineLogoProps>(
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
      <path d="M4 19l3.332 -11.661" />
  <path d="M16 5l2.806 9.823" />
  <path d="M12 8v-2" />
  <path d="M12 13v-1" />
  <path d="M12 18v-2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

RoadOffOutlineLogo.displayName = "RoadOffOutlineLogo";

export const RoadOffOutlineLogoMetadata = {
  id: "road-off-outline",
  baseId: "road-off-outline",
  variant: "default",
  name: "Road Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RoadOffOutlineLogo;
