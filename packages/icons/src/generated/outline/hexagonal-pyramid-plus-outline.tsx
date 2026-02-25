/**
 * Auto-generated logo component: Hexagonal Pyramid Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HexagonalPyramidPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HexagonalPyramidPlusOutlineLogo = React.forwardRef<SVGSVGElement, HexagonalPyramidPlusOutlineLogoProps>(
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
      <path d="M18.642 12.04l-5.804 -9.583a.996 .996 0 0 0 -1.676 0l-7.846 12.954a1.988 1.988 0 0 0 .267 2.483l2.527 2.523c.374 .373 .88 .583 1.408 .583h4.982" />
  <path d="M12 2l-5 18.9" />
  <path d="M12 2l3.304 12.489" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

HexagonalPyramidPlusOutlineLogo.displayName = "HexagonalPyramidPlusOutlineLogo";

export const HexagonalPyramidPlusOutlineLogoMetadata = {
  id: "hexagonal-pyramid-plus-outline",
  baseId: "hexagonal-pyramid-plus-outline",
  variant: "default",
  name: "Hexagonal Pyramid Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HexagonalPyramidPlusOutlineLogo;
