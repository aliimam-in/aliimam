/**
 * Auto-generated logo component: Carambola Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CarambolaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CarambolaOutlineLogo = React.forwardRef<SVGSVGElement, CarambolaOutlineLogoProps>(
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
      <path d="M17.286 21.09q -1.69 .001 -5.288 -2.615q -3.596 2.617 -5.288 2.616q -2.726 0 -.495 -6.8q -9.389 -6.775 2.135 -6.775h.076q 1.785 -5.516 3.574 -5.516q 1.785 0 3.574 5.516h.076q 11.525 0 2.133 6.774q 2.23 6.802 -.497 6.8" />
    </svg>
  )
);

CarambolaOutlineLogo.displayName = "CarambolaOutlineLogo";

export const CarambolaOutlineLogoMetadata = {
  id: "carambola-outline",
  baseId: "carambola-outline",
  variant: "default",
  name: "Carambola Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CarambolaOutlineLogo;
