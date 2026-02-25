/**
 * Auto-generated logo component: Direction Sign Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DirectionSignOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DirectionSignOffOutlineLogo = React.forwardRef<SVGSVGElement, DirectionSignOffOutlineLogoProps>(
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
      <path d="M18.73 14.724l1.949 -1.95a1.095 1.095 0 0 0 0 -1.548l-7.905 -7.905a1.095 1.095 0 0 0 -1.548 0l-1.95 1.95m-2.01 2.01l-3.945 3.945a1.095 1.095 0 0 0 0 1.548l7.905 7.905c.427 .428 1.12 .428 1.548 0l3.95 -3.95" />
  <path d="M8 12h4" />
  <path d="M13.748 13.752l-1.748 1.748" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

DirectionSignOffOutlineLogo.displayName = "DirectionSignOffOutlineLogo";

export const DirectionSignOffOutlineLogoMetadata = {
  id: "direction-sign-off-outline",
  baseId: "direction-sign-off-outline",
  variant: "default",
  name: "Direction Sign Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DirectionSignOffOutlineLogo;
