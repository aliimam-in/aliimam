/**
 * Auto-generated logo component: Hexagon Number 7 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HexagonNumber7OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HexagonNumber7OutlineLogo = React.forwardRef<SVGSVGElement, HexagonNumber7OutlineLogoProps>(
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
      <path d="M19.02 6.858a2 2 0 0 1 1 1.752v6.555c0 .728 -.395 1.4 -1.032 1.753l-6.017 3.844a2 2 0 0 1 -1.948 0l-6.016 -3.844a2 2 0 0 1 -1.032 -1.752v-6.556c0 -.728 .395 -1.4 1.032 -1.753l6.017 -3.582a2.062 2.062 0 0 1 2 0l6.017 3.583h-.029l.008 0" />
  <path d="M10 8h4l-2 8" />
    </svg>
  )
);

HexagonNumber7OutlineLogo.displayName = "HexagonNumber7OutlineLogo";

export const HexagonNumber7OutlineLogoMetadata = {
  id: "hexagon-number-7-outline",
  baseId: "hexagon-number-7-outline",
  variant: "default",
  name: "Hexagon Number 7 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HexagonNumber7OutlineLogo;
