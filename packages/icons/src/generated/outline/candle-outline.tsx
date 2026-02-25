/**
 * Auto-generated logo component: Candle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CandleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CandleOutlineLogo = React.forwardRef<SVGSVGElement, CandleOutlineLogoProps>(
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
      <path d="M9 21h6v-10a1 1 0 0 0 -1 -1h-4a1 1 0 0 0 -1 1l0 10" />
  <path d="M12 2l1.465 1.638a2 2 0 1 1 -3.015 .099l1.55 -1.737" />
    </svg>
  )
);

CandleOutlineLogo.displayName = "CandleOutlineLogo";

export const CandleOutlineLogoMetadata = {
  id: "candle-outline",
  baseId: "candle-outline",
  variant: "default",
  name: "Candle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CandleOutlineLogo;
