/**
 * Auto-generated logo component: Square (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareLogo = React.forwardRef<SVGSVGElement, SquareLogoProps>(
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
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    </svg>
  )
);

SquareLogo.displayName = "SquareLogo";

export const SquareLogoMetadata = {
  id: "square",
  baseId: "square",
  variant: "default",
  name: "Square",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareLogo;
