/**
 * Auto-generated logo component: Ping Pong Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PingPongOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PingPongOutlineLogo = React.forwardRef<SVGSVGElement, PingPongOutlineLogoProps>(
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
      <path d="M12.718 20.713a7.64 7.64 0 0 1 -7.48 -12.755l.72 -.72a7.643 7.643 0 0 1 9.105 -1.283l2.387 -2.345a2.08 2.08 0 0 1 3.057 2.815l-.116 .126l-2.346 2.387a7.644 7.644 0 0 1 -1.052 8.864" />
  <path d="M11 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M9.3 5.3l9.4 9.4" />
    </svg>
  )
);

PingPongOutlineLogo.displayName = "PingPongOutlineLogo";

export const PingPongOutlineLogoMetadata = {
  id: "ping-pong-outline",
  baseId: "ping-pong-outline",
  variant: "default",
  name: "Ping Pong Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PingPongOutlineLogo;
