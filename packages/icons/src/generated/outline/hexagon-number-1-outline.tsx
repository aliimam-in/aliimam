/**
 * Auto-generated logo component: Hexagon Number 1 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HexagonNumber1OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HexagonNumber1OutlineLogo = React.forwardRef<SVGSVGElement, HexagonNumber1OutlineLogoProps>(
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
      <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033" />
  <path d="M10 10l2 -2v8" />
    </svg>
  )
);

HexagonNumber1OutlineLogo.displayName = "HexagonNumber1OutlineLogo";

export const HexagonNumber1OutlineLogoMetadata = {
  id: "hexagon-number-1-outline",
  baseId: "hexagon-number-1-outline",
  variant: "default",
  name: "Hexagon Number 1 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HexagonNumber1OutlineLogo;
