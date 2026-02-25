/**
 * Auto-generated logo component: Directions Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DirectionsOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DirectionsOffOutlineLogo = React.forwardRef<SVGSVGElement, DirectionsOffOutlineLogoProps>(
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
      <path d="M12 21v-4" />
  <path d="M12 13v-1" />
  <path d="M12 5v-2" />
  <path d="M10 21h4" />
  <path d="M8 8v1h1m4 0h6l2 -2l-2 -2h-10" />
  <path d="M14 14v3h-8l-2 -2l2 -2h7" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

DirectionsOffOutlineLogo.displayName = "DirectionsOffOutlineLogo";

export const DirectionsOffOutlineLogoMetadata = {
  id: "directions-off-outline",
  baseId: "directions-off-outline",
  variant: "default",
  name: "Directions Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DirectionsOffOutlineLogo;
