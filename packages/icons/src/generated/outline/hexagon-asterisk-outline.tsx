/**
 * Auto-generated logo component: Hexagon Asterisk Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HexagonAsteriskOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HexagonAsteriskOutlineLogo = React.forwardRef<SVGSVGElement, HexagonAsteriskOutlineLogoProps>(
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
      <path d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1 -2.184 0l-6.75 -4.27a2.23 2.23 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98l-.033 0" />
  <path d="M12 8.5v7" />
  <path d="M9 10l6 4" />
  <path d="M9 14l6 -4" />
    </svg>
  )
);

HexagonAsteriskOutlineLogo.displayName = "HexagonAsteriskOutlineLogo";

export const HexagonAsteriskOutlineLogoMetadata = {
  id: "hexagon-asterisk-outline",
  baseId: "hexagon-asterisk-outline",
  variant: "default",
  name: "Hexagon Asterisk Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HexagonAsteriskOutlineLogo;
