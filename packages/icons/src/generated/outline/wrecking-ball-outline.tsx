/**
 * Auto-generated logo component: Wrecking Ball Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WreckingBallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WreckingBallOutlineLogo = React.forwardRef<SVGSVGElement, WreckingBallOutlineLogoProps>(
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
      <path d="M17 13a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M2 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M11 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M13 19l-9 0" />
  <path d="M4 15l9 0" />
  <path d="M8 12v-5h2a3 3 0 0 1 3 3v5" />
  <path d="M5 15v-2a1 1 0 0 1 1 -1h7" />
  <path d="M19 11v-7l-6 7" />
    </svg>
  )
);

WreckingBallOutlineLogo.displayName = "WreckingBallOutlineLogo";

export const WreckingBallOutlineLogoMetadata = {
  id: "wrecking-ball-outline",
  baseId: "wrecking-ball-outline",
  variant: "default",
  name: "Wrecking Ball Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WreckingBallOutlineLogo;
