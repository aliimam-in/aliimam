/**
 * Auto-generated logo component: Caret Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CaretUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CaretUpOutlineLogo = React.forwardRef<SVGSVGElement, CaretUpOutlineLogoProps>(
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
      <path d="M18 14l-6 -6l-6 6h12" />
    </svg>
  )
);

CaretUpOutlineLogo.displayName = "CaretUpOutlineLogo";

export const CaretUpOutlineLogoMetadata = {
  id: "caret-up-outline",
  baseId: "caret-up-outline",
  variant: "default",
  name: "Caret Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CaretUpOutlineLogo;
