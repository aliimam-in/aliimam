/**
 * Auto-generated logo component: Hexagonal Pyramid Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HexagonalPyramidOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HexagonalPyramidOffOutlineLogo = React.forwardRef<SVGSVGElement, HexagonalPyramidOffOutlineLogoProps>(
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
      <path d="M7.877 7.88l-4.56 7.53a1.988 1.988 0 0 0 .266 2.484l2.527 2.523c.374 .373 .88 .583 1.408 .583h8.964c.528 0 1.034 -.21 1.408 -.583l1.264 -1.263m1.792 -2.205a1.986 1.986 0 0 0 -.262 -1.538l-7.846 -12.954a.996 .996 0 0 0 -1.676 0l-1.772 2.926" />
  <path d="M12 2l-1.254 4.742m-.841 3.177l-2.905 10.981" />
  <path d="M12 2l2.153 8.14m1.444 5.457l1.403 5.303" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

HexagonalPyramidOffOutlineLogo.displayName = "HexagonalPyramidOffOutlineLogo";

export const HexagonalPyramidOffOutlineLogoMetadata = {
  id: "hexagonal-pyramid-off-outline",
  baseId: "hexagonal-pyramid-off-outline",
  variant: "default",
  name: "Hexagonal Pyramid Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HexagonalPyramidOffOutlineLogo;
