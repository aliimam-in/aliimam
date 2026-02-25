/**
 * Auto-generated logo component: Wheelchair Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WheelchairOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WheelchairOffOutlineLogo = React.forwardRef<SVGSVGElement, WheelchairOffOutlineLogoProps>(
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
      <path d="M3 16a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
  <path d="M17.582 17.59a2 2 0 0 0 2.833 2.824" />
  <path d="M14 14h-1.4" />
  <path d="M6 6v5" />
  <path d="M6 8h2m4 0h5" />
  <path d="M15 8v3" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

WheelchairOffOutlineLogo.displayName = "WheelchairOffOutlineLogo";

export const WheelchairOffOutlineLogoMetadata = {
  id: "wheelchair-off-outline",
  baseId: "wheelchair-off-outline",
  variant: "default",
  name: "Wheelchair Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WheelchairOffOutlineLogo;
