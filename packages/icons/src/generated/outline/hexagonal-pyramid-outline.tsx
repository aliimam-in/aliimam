/**
 * Auto-generated logo component: Hexagonal Pyramid Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HexagonalPyramidOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HexagonalPyramidOutlineLogo = React.forwardRef<SVGSVGElement, HexagonalPyramidOutlineLogoProps>(
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
      <path d="M11.162 2.457l-7.846 12.954a1.988 1.988 0 0 0 .267 2.483l2.527 2.523c.374 .373 .88 .583 1.408 .583h8.964c.528 0 1.034 -.21 1.408 -.583l2.527 -2.523a1.988 1.988 0 0 0 .267 -2.483l-7.846 -12.954a.996 .996 0 0 0 -1.676 0" />
  <path d="M12 2l-5 18.9" />
  <path d="M12 2l5 18.9" />
    </svg>
  )
);

HexagonalPyramidOutlineLogo.displayName = "HexagonalPyramidOutlineLogo";

export const HexagonalPyramidOutlineLogoMetadata = {
  id: "hexagonal-pyramid-outline",
  baseId: "hexagonal-pyramid-outline",
  variant: "default",
  name: "Hexagonal Pyramid Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HexagonalPyramidOutlineLogo;
