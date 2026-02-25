/**
 * Auto-generated logo component: Square Root 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareRoot2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareRoot2OutlineLogo = React.forwardRef<SVGSVGElement, SquareRoot2OutlineLogoProps>(
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
      <path d="M13 12h1c1 0 1 1 2.016 3.527c.984 2.473 .984 3.473 1.984 3.473h1" />
  <path d="M12 19c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5" />
  <path d="M3 12h1l3 8l3 -16h10" />
    </svg>
  )
);

SquareRoot2OutlineLogo.displayName = "SquareRoot2OutlineLogo";

export const SquareRoot2OutlineLogoMetadata = {
  id: "square-root-2-outline",
  baseId: "square-root-2-outline",
  variant: "default",
  name: "Square Root 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareRoot2OutlineLogo;
