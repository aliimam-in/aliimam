/**
 * Auto-generated logo component: Hexagon Minus Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HexagonMinusFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HexagonMinusFilledLogo = React.forwardRef<SVGSVGElement, HexagonMinusFilledLogoProps>(
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
      <path d="M13.666 1.429l6.75 3.98l.096 .063l.093 .078l.106 .074a3.22 3.22 0 0 1 1.284 2.39l.005 .204v7.284c0 1.175 -.643 2.256 -1.623 2.793l-6.804 4.302c-.98 .538 -2.166 .538 -3.2 -.032l-6.695 -4.237a3.23 3.23 0 0 1 -1.678 -2.826v-7.285c0 -1.106 .57 -2.128 1.476 -2.705l6.95 -4.098c1 -.552 2.214 -.552 3.24 .015m1.334 9.571h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2" />
    </svg>
  )
);

HexagonMinusFilledLogo.displayName = "HexagonMinusFilledLogo";

export const HexagonMinusFilledLogoMetadata = {
  id: "hexagon-minus-filled",
  baseId: "hexagon-minus-filled",
  variant: "default",
  name: "Hexagon Minus Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HexagonMinusFilledLogo;
