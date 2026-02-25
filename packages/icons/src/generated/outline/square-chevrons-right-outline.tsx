/**
 * Auto-generated logo component: Square Chevrons Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareChevronsRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareChevronsRightOutlineLogo = React.forwardRef<SVGSVGElement, SquareChevronsRightOutlineLogoProps>(
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
      <path d="M8 9l3 3l-3 3" />
  <path d="M13 9l3 3l-3 3" />
  <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
    </svg>
  )
);

SquareChevronsRightOutlineLogo.displayName = "SquareChevronsRightOutlineLogo";

export const SquareChevronsRightOutlineLogoMetadata = {
  id: "square-chevrons-right-outline",
  baseId: "square-chevrons-right-outline",
  variant: "default",
  name: "Square Chevrons Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareChevronsRightOutlineLogo;
