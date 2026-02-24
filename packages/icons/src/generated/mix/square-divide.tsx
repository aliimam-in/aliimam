/**
 * Auto-generated logo component: Square Divide (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareDivideLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareDivideLogo = React.forwardRef<SVGSVGElement, SquareDivideLogoProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
  <line x1="8" x2="16" y1="12" y2="12" />
  <line x1="12" x2="12" y1="16" y2="16" />
  <line x1="12" x2="12" y1="8" y2="8" />
    </svg>
  )
);

SquareDivideLogo.displayName = "SquareDivideLogo";

export const SquareDivideLogoMetadata = {
  id: "square-divide",
  baseId: "square-divide",
  variant: "default",
  name: "Square Divide",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareDivideLogo;
