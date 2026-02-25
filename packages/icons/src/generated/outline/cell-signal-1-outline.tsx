/**
 * Auto-generated logo component: Cell Signal 1 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CellSignal1OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CellSignal1OutlineLogo = React.forwardRef<SVGSVGElement, CellSignal1OutlineLogoProps>(
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
      <path d="M20 20h-15.269a.731 .731 0 0 1 -.517 -1.249l14.537 -14.537a.731 .731 0 0 1 1.249 .517v15.269" />
    </svg>
  )
);

CellSignal1OutlineLogo.displayName = "CellSignal1OutlineLogo";

export const CellSignal1OutlineLogoMetadata = {
  id: "cell-signal-1-outline",
  baseId: "cell-signal-1-outline",
  variant: "default",
  name: "Cell Signal 1 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CellSignal1OutlineLogo;
