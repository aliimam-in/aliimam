/**
 * Auto-generated logo component: Square Rounded Minus 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareRoundedMinus2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareRoundedMinus2OutlineLogo = React.forwardRef<SVGSVGElement, SquareRoundedMinus2OutlineLogoProps>(
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
      <path d="M12.5 21c-.18 .002 -.314 0 -.5 0c-7.2 0 -9 -1.8 -9 -9s1.8 -9 9 -9s9 1.8 9 9c0 1.136 -.046 2.138 -.152 3.02" />
  <path d="M16 19h6" />
    </svg>
  )
);

SquareRoundedMinus2OutlineLogo.displayName = "SquareRoundedMinus2OutlineLogo";

export const SquareRoundedMinus2OutlineLogoMetadata = {
  id: "square-rounded-minus-2-outline",
  baseId: "square-rounded-minus-2-outline",
  variant: "default",
  name: "Square Rounded Minus 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareRoundedMinus2OutlineLogo;
