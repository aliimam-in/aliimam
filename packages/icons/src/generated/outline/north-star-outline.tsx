/**
 * Auto-generated logo component: North Star Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NorthStarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NorthStarOutlineLogo = React.forwardRef<SVGSVGElement, NorthStarOutlineLogoProps>(
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
      <path d="M3 12h18" />
  <path d="M12 21v-18" />
  <path d="M7.5 7.5l9 9" />
  <path d="M7.5 16.5l9 -9" />
    </svg>
  )
);

NorthStarOutlineLogo.displayName = "NorthStarOutlineLogo";

export const NorthStarOutlineLogoMetadata = {
  id: "north-star-outline",
  baseId: "north-star-outline",
  variant: "default",
  name: "North Star Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NorthStarOutlineLogo;
