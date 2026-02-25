/**
 * Auto-generated logo component: Cell Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CellOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CellOutlineLogo = React.forwardRef<SVGSVGElement, CellOutlineLogoProps>(
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
      <path d="M8 4l-4 2v5l4 2l4 -2v-5l-4 -2" />
  <path d="M12 11l4 2l4 -2v-5l-4 -2l-4 2" />
  <path d="M8 13v5l4 2l4 -2v-5" />
    </svg>
  )
);

CellOutlineLogo.displayName = "CellOutlineLogo";

export const CellOutlineLogoMetadata = {
  id: "cell-outline",
  baseId: "cell-outline",
  variant: "default",
  name: "Cell Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CellOutlineLogo;
