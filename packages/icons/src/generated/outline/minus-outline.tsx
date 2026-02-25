/**
 * Auto-generated logo component: Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MinusOutlineLogo = React.forwardRef<SVGSVGElement, MinusOutlineLogoProps>(
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
      <path d="M5 12l14 0" />
    </svg>
  )
);

MinusOutlineLogo.displayName = "MinusOutlineLogo";

export const MinusOutlineLogoMetadata = {
  id: "minus-outline",
  baseId: "minus-outline",
  variant: "default",
  name: "Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MinusOutlineLogo;
