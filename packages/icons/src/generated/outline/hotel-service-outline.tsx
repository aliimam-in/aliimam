/**
 * Auto-generated logo component: Hotel Service Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HotelServiceOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HotelServiceOutlineLogo = React.forwardRef<SVGSVGElement, HotelServiceOutlineLogoProps>(
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
      <path d="M8.5 10a1.5 1.5 0 0 1 -1.5 -1.5a5.5 5.5 0 0 1 11 0v10.5a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2c0 -1.38 .71 -2.444 1.88 -3.175l4.424 -2.765c1.055 -.66 1.696 -1.316 1.696 -2.56a2.5 2.5 0 1 0 -5 0a1.5 1.5 0 0 1 -1.5 1.5" />
    </svg>
  )
);

HotelServiceOutlineLogo.displayName = "HotelServiceOutlineLogo";

export const HotelServiceOutlineLogoMetadata = {
  id: "hotel-service-outline",
  baseId: "hotel-service-outline",
  variant: "default",
  name: "Hotel Service Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HotelServiceOutlineLogo;
