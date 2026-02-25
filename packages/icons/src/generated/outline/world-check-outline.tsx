/**
 * Auto-generated logo component: World Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WorldCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WorldCheckOutlineLogo = React.forwardRef<SVGSVGElement, WorldCheckOutlineLogoProps>(
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
      <path d="M20.946 12.99a9 9 0 1 0 -9.46 7.995" />
  <path d="M3.6 9h16.8" />
  <path d="M3.6 15h13.9" />
  <path d="M11.5 3a17 17 0 0 0 0 18" />
  <path d="M12.5 3a16.997 16.997 0 0 1 2.311 12.001" />
  <path d="M15 19l2 2l4 -4" />
    </svg>
  )
);

WorldCheckOutlineLogo.displayName = "WorldCheckOutlineLogo";

export const WorldCheckOutlineLogoMetadata = {
  id: "world-check-outline",
  baseId: "world-check-outline",
  variant: "default",
  name: "World Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WorldCheckOutlineLogo;
