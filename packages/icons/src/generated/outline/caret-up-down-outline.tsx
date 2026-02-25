/**
 * Auto-generated logo component: Caret Up Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CaretUpDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CaretUpDownOutlineLogo = React.forwardRef<SVGSVGElement, CaretUpDownOutlineLogoProps>(
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
      <path d="M18 10l-6 -6l-6 6h12" />
  <path d="M18 14l-6 6l-6 -6h12" />
    </svg>
  )
);

CaretUpDownOutlineLogo.displayName = "CaretUpDownOutlineLogo";

export const CaretUpDownOutlineLogoMetadata = {
  id: "caret-up-down-outline",
  baseId: "caret-up-down-outline",
  variant: "default",
  name: "Caret Up Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CaretUpDownOutlineLogo;
