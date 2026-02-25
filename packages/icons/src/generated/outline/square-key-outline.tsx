/**
 * Auto-generated logo component: Square Key Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareKeyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareKeyOutlineLogo = React.forwardRef<SVGSVGElement, SquareKeyOutlineLogoProps>(
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
      <path d="M12 10a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M12.5 11.5l-4 4l1.5 1.5" />
  <path d="M12 15l-1.5 -1.5" />
  <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
    </svg>
  )
);

SquareKeyOutlineLogo.displayName = "SquareKeyOutlineLogo";

export const SquareKeyOutlineLogoMetadata = {
  id: "square-key-outline",
  baseId: "square-key-outline",
  variant: "default",
  name: "Square Key Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareKeyOutlineLogo;
