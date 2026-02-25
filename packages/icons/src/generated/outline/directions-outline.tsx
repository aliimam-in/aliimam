/**
 * Auto-generated logo component: Directions Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DirectionsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DirectionsOutlineLogo = React.forwardRef<SVGSVGElement, DirectionsOutlineLogoProps>(
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
  <path d="M12 13v-4" />
  <path d="M12 5v-2" />
  <path d="M10 21h4" />
  <path d="M8 5v4h11l2 -2l-2 -2l-11 0" />
  <path d="M14 13v4h-8l-2 -2l2 -2l8 0" />
    </svg>
  )
);

DirectionsOutlineLogo.displayName = "DirectionsOutlineLogo";

export const DirectionsOutlineLogoMetadata = {
  id: "directions-outline",
  baseId: "directions-outline",
  variant: "default",
  name: "Directions Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DirectionsOutlineLogo;
