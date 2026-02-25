/**
 * Auto-generated logo component: Hexagon Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HexagonFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HexagonFilledLogo = React.forwardRef<SVGSVGElement, HexagonFilledLogoProps>(
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
      <path d="M10.425 1.414l-6.775 3.996a3.21 3.21 0 0 0 -1.65 2.807v7.285a3.226 3.226 0 0 0 1.678 2.826l6.695 4.237c1.034 .57 2.22 .57 3.2 .032l6.804 -4.302c.98 -.537 1.623 -1.618 1.623 -2.793v-7.284l-.005 -.204a3.223 3.223 0 0 0 -1.284 -2.39l-.107 -.075l-.007 -.007a1.074 1.074 0 0 0 -.181 -.133l-6.776 -3.995a3.33 3.33 0 0 0 -3.216 0z" />
    </svg>
  )
);

HexagonFilledLogo.displayName = "HexagonFilledLogo";

export const HexagonFilledLogoMetadata = {
  id: "hexagon-filled",
  baseId: "hexagon-filled",
  variant: "default",
  name: "Hexagon Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HexagonFilledLogo;
