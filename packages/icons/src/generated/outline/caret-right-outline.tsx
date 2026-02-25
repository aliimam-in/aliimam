/**
 * Auto-generated logo component: Caret Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CaretRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CaretRightOutlineLogo = React.forwardRef<SVGSVGElement, CaretRightOutlineLogoProps>(
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
      <path d="M10 18l6 -6l-6 -6v12" />
    </svg>
  )
);

CaretRightOutlineLogo.displayName = "CaretRightOutlineLogo";

export const CaretRightOutlineLogoMetadata = {
  id: "caret-right-outline",
  baseId: "caret-right-outline",
  variant: "default",
  name: "Caret Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CaretRightOutlineLogo;
