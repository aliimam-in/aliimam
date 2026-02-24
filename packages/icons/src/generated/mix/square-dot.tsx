/**
 * Auto-generated logo component: Square Dot (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareDotLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareDotLogo = React.forwardRef<SVGSVGElement, SquareDotLogoProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <circle cx="12" cy="12" r="1" />
    </svg>
  )
);

SquareDotLogo.displayName = "SquareDotLogo";

export const SquareDotLogoMetadata = {
  id: "square-dot",
  baseId: "square-dot",
  variant: "default",
  name: "Square Dot",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareDotLogo;
