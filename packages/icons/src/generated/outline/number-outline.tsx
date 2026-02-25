/**
 * Auto-generated logo component: Number Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NumberOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NumberOutlineLogo = React.forwardRef<SVGSVGElement, NumberOutlineLogoProps>(
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
      <path d="M4 17v-10l7 10v-10" />
  <path d="M15 17h5" />
  <path d="M15 10a2.5 3 0 1 0 5 0a2.5 3 0 1 0 -5 0" />
    </svg>
  )
);

NumberOutlineLogo.displayName = "NumberOutlineLogo";

export const NumberOutlineLogoMetadata = {
  id: "number-outline",
  baseId: "number-outline",
  variant: "default",
  name: "Number Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NumberOutlineLogo;
