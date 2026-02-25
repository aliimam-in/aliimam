/**
 * Auto-generated logo component: Hexagon Minus 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HexagonMinus2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HexagonMinus2OutlineLogo = React.forwardRef<SVGSVGElement, HexagonMinus2OutlineLogoProps>(
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
      <path d="M13.092 21.72a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033c.7 .398 1.13 1.143 1.125 1.948v6.782" />
  <path d="M16 19h6" />
    </svg>
  )
);

HexagonMinus2OutlineLogo.displayName = "HexagonMinus2OutlineLogo";

export const HexagonMinus2OutlineLogoMetadata = {
  id: "hexagon-minus-2-outline",
  baseId: "hexagon-minus-2-outline",
  variant: "default",
  name: "Hexagon Minus 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HexagonMinus2OutlineLogo;
