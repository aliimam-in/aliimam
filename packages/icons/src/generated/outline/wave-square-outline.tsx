/**
 * Auto-generated logo component: Wave Square Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WaveSquareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WaveSquareOutlineLogo = React.forwardRef<SVGSVGElement, WaveSquareOutlineLogoProps>(
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
      <path d="M3 12h5v8h4v-16h4v8h5" />
    </svg>
  )
);

WaveSquareOutlineLogo.displayName = "WaveSquareOutlineLogo";

export const WaveSquareOutlineLogoMetadata = {
  id: "wave-square-outline",
  baseId: "wave-square-outline",
  variant: "default",
  name: "Wave Square Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WaveSquareOutlineLogo;
