/**
 * Auto-generated logo component: Cell Signal Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CellSignalOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CellSignalOffOutlineLogo = React.forwardRef<SVGSVGElement, CellSignalOffOutlineLogoProps>(
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
      <path d="M20 20h-15.269a.731 .731 0 0 1 -.517 -1.249l7.265 -7.264m2 -2l5.272 -5.272a.731 .731 0 0 1 1.249 .517v11.269" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

CellSignalOffOutlineLogo.displayName = "CellSignalOffOutlineLogo";

export const CellSignalOffOutlineLogoMetadata = {
  id: "cell-signal-off-outline",
  baseId: "cell-signal-off-outline",
  variant: "default",
  name: "Cell Signal Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CellSignalOffOutlineLogo;
