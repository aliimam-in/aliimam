/**
 * Auto-generated logo component: Numbers Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NumbersOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NumbersOutlineLogo = React.forwardRef<SVGSVGElement, NumbersOutlineLogoProps>(
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
      <path d="M8 10v-7l-2 2" />
  <path d="M6 16a2 2 0 1 1 4 0c0 .591 -.601 1.46 -1 2l-3 3h4" />
  <path d="M15 14a2 2 0 1 0 2 -2a2 2 0 1 0 -2 -2" />
  <path d="M6.5 10h3" />
    </svg>
  )
);

NumbersOutlineLogo.displayName = "NumbersOutlineLogo";

export const NumbersOutlineLogoMetadata = {
  id: "numbers-outline",
  baseId: "numbers-outline",
  variant: "default",
  name: "Numbers Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NumbersOutlineLogo;
