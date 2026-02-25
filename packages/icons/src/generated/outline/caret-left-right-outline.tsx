/**
 * Auto-generated logo component: Caret Left Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CaretLeftRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CaretLeftRightOutlineLogo = React.forwardRef<SVGSVGElement, CaretLeftRightOutlineLogoProps>(
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
      <path d="M14 18l6 -6l-6 -6v12" />
  <path d="M10 18l-6 -6l6 -6v12" />
    </svg>
  )
);

CaretLeftRightOutlineLogo.displayName = "CaretLeftRightOutlineLogo";

export const CaretLeftRightOutlineLogoMetadata = {
  id: "caret-left-right-outline",
  baseId: "caret-left-right-outline",
  variant: "default",
  name: "Caret Left Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CaretLeftRightOutlineLogo;
