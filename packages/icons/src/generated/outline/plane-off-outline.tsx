/**
 * Auto-generated logo component: Plane Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlaneOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlaneOffOutlineLogo = React.forwardRef<SVGSVGElement, PlaneOffOutlineLogoProps>(
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
      <path d="M9.788 5.758l-.788 -2.758h3l4 7h4a2 2 0 1 1 0 4h-2m-2.718 1.256l-3.282 5.744h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h3" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

PlaneOffOutlineLogo.displayName = "PlaneOffOutlineLogo";

export const PlaneOffOutlineLogoMetadata = {
  id: "plane-off-outline",
  baseId: "plane-off-outline",
  variant: "default",
  name: "Plane Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlaneOffOutlineLogo;
