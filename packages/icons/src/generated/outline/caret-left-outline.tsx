/**
 * Auto-generated logo component: Caret Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CaretLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CaretLeftOutlineLogo = React.forwardRef<SVGSVGElement, CaretLeftOutlineLogoProps>(
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
      <path d="M14 6l-6 6l6 6v-12" />
    </svg>
  )
);

CaretLeftOutlineLogo.displayName = "CaretLeftOutlineLogo";

export const CaretLeftOutlineLogoMetadata = {
  id: "caret-left-outline",
  baseId: "caret-left-outline",
  variant: "default",
  name: "Caret Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CaretLeftOutlineLogo;
