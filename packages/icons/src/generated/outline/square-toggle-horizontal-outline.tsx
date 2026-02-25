/**
 * Auto-generated logo component: Square Toggle Horizontal Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareToggleHorizontalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareToggleHorizontalOutlineLogo = React.forwardRef<SVGSVGElement, SquareToggleHorizontalOutlineLogoProps>(
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
      <path d="M22 12h-20" />
  <path d="M4 14v-8a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8" />
  <path d="M18 20a2 2 0 0 0 2 -2" />
  <path d="M4 18a2 2 0 0 0 2 2" />
  <path d="M14 20l-4 0" />
    </svg>
  )
);

SquareToggleHorizontalOutlineLogo.displayName = "SquareToggleHorizontalOutlineLogo";

export const SquareToggleHorizontalOutlineLogoMetadata = {
  id: "square-toggle-horizontal-outline",
  baseId: "square-toggle-horizontal-outline",
  variant: "default",
  name: "Square Toggle Horizontal Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareToggleHorizontalOutlineLogo;
