/**
 * Auto-generated logo component: Wheelchair Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WheelchairOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WheelchairOutlineLogo = React.forwardRef<SVGSVGElement, WheelchairOutlineLogoProps>(
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
  <path d="M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M19 17a3 3 0 0 0 -3 -3h-3.4" />
  <path d="M3 3h1a2 2 0 0 1 2 2v6" />
  <path d="M6 8h11" />
  <path d="M15 8v6" />
    </svg>
  )
);

WheelchairOutlineLogo.displayName = "WheelchairOutlineLogo";

export const WheelchairOutlineLogoMetadata = {
  id: "wheelchair-outline",
  baseId: "wheelchair-outline",
  variant: "default",
  name: "Wheelchair Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WheelchairOutlineLogo;
