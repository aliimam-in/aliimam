/**
 * Auto-generated logo component: Road Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RoadOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RoadOutlineLogo = React.forwardRef<SVGSVGElement, RoadOutlineLogoProps>(
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
      <path d="M4 19l4 -14" />
  <path d="M16 5l4 14" />
  <path d="M12 8v-2" />
  <path d="M12 13v-2" />
  <path d="M12 18v-2" />
    </svg>
  )
);

RoadOutlineLogo.displayName = "RoadOutlineLogo";

export const RoadOutlineLogoMetadata = {
  id: "road-outline",
  baseId: "road-outline",
  variant: "default",
  name: "Road Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RoadOutlineLogo;
