/**
 * Auto-generated logo component: Square Minus 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareMinus2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareMinus2OutlineLogo = React.forwardRef<SVGSVGElement, SquareMinus2OutlineLogoProps>(
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
      <path d="M12.5 21h-7.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10" />
  <path d="M16 19h6" />
    </svg>
  )
);

SquareMinus2OutlineLogo.displayName = "SquareMinus2OutlineLogo";

export const SquareMinus2OutlineLogoMetadata = {
  id: "square-minus-2-outline",
  baseId: "square-minus-2-outline",
  variant: "default",
  name: "Square Minus 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareMinus2OutlineLogo;
