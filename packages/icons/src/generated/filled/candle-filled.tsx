/**
 * Auto-generated logo component: Candle Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CandleFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CandleFilledLogo = React.forwardRef<SVGSVGElement, CandleFilledLogoProps>(
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
      <path d="M14 9a2 2 0 0 1 2 2v10a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-10a2 2 0 0 1 2 -2z" />
  <path d="M11.254 1.334a1 1 0 0 1 1.491 0l1.452 1.623a3 3 0 0 1 -4.196 4.28c-1.195 -1.07 -1.339 -2.889 -.297 -4.166z" />
    </svg>
  )
);

CandleFilledLogo.displayName = "CandleFilledLogo";

export const CandleFilledLogoMetadata = {
  id: "candle-filled",
  baseId: "candle-filled",
  variant: "default",
  name: "Candle Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CandleFilledLogo;
