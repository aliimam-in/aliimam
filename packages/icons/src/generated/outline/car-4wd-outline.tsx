/**
 * Auto-generated logo component: Car 4wd Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Car4wdOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Car4wdOutlineLogo = React.forwardRef<SVGSVGElement, Car4wdOutlineLogoProps>(
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
      <path d="M5 5a2 2 0 0 1 2 -2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2a2 2 0 0 1 -2 -2l0 -2" />
  <path d="M5 17a2 2 0 0 1 2 -2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2a2 2 0 0 1 -2 -2l0 -2" />
  <path d="M15 5a2 2 0 0 1 2 -2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2a2 2 0 0 1 -2 -2l0 -2" />
  <path d="M15 17a2 2 0 0 1 2 -2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2a2 2 0 0 1 -2 -2l0 -2" />
  <path d="M9 18h6" />
  <path d="M9 6h6" />
  <path d="M12 6.5v-.5v12" />
    </svg>
  )
);

Car4wdOutlineLogo.displayName = "Car4wdOutlineLogo";

export const Car4wdOutlineLogoMetadata = {
  id: "car-4wd-outline",
  baseId: "car-4wd-outline",
  variant: "default",
  name: "Car 4wd Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Car4wdOutlineLogo;
