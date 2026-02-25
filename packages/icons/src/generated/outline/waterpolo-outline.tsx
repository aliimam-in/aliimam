/**
 * Auto-generated logo component: Waterpolo Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WaterpoloOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WaterpoloOutlineLogo = React.forwardRef<SVGSVGElement, WaterpoloOutlineLogoProps>(
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
      <path d="M12 9a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  <path d="M5 8l3 4l4.5 1l7.5 -1" />
  <path d="M3 18.75a2.4 2.4 0 0 0 1 .25a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 1 -.25" />
  <path d="M12 16l.5 -3" />
  <path d="M6.5 5a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1" fill="currentColor" />
    </svg>
  )
);

WaterpoloOutlineLogo.displayName = "WaterpoloOutlineLogo";

export const WaterpoloOutlineLogoMetadata = {
  id: "waterpolo-outline",
  baseId: "waterpolo-outline",
  variant: "default",
  name: "Waterpolo Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WaterpoloOutlineLogo;
