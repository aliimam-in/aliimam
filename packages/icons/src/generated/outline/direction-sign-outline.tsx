/**
 * Auto-generated logo component: Direction Sign Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DirectionSignOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DirectionSignOutlineLogo = React.forwardRef<SVGSVGElement, DirectionSignOutlineLogoProps>(
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
      <path d="M3.32 12.774l7.906 7.905c.427 .428 1.12 .428 1.548 0l7.905 -7.905a1.095 1.095 0 0 0 0 -1.548l-7.905 -7.905a1.095 1.095 0 0 0 -1.548 0l-7.905 7.905a1.095 1.095 0 0 0 0 1.548" />
  <path d="M8 12h7.5" />
  <path d="M12 8.5l3.5 3.5l-3.5 3.5" />
    </svg>
  )
);

DirectionSignOutlineLogo.displayName = "DirectionSignOutlineLogo";

export const DirectionSignOutlineLogoMetadata = {
  id: "direction-sign-outline",
  baseId: "direction-sign-outline",
  variant: "default",
  name: "Direction Sign Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DirectionSignOutlineLogo;
