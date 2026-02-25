/**
 * Auto-generated logo component: Caret Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CaretDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CaretDownOutlineLogo = React.forwardRef<SVGSVGElement, CaretDownOutlineLogoProps>(
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
      <path d="M6 10l6 6l6 -6h-12" />
    </svg>
  )
);

CaretDownOutlineLogo.displayName = "CaretDownOutlineLogo";

export const CaretDownOutlineLogoMetadata = {
  id: "caret-down-outline",
  baseId: "caret-down-outline",
  variant: "default",
  name: "Caret Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CaretDownOutlineLogo;
