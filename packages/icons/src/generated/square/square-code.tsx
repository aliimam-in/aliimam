/**
 * Auto-generated logo component: Square Code (default)
 * Category: square
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareCodeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareCodeLogo = React.forwardRef<SVGSVGElement, SquareCodeLogoProps>(
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
      <path d="m10 9-3 3 3 3" />
  <path d="m14 15 3-3-3-3" />
  <rect x="3" y="3" width="18" height="18" rx="2" />
    </svg>
  )
);

SquareCodeLogo.displayName = "SquareCodeLogo";

export const SquareCodeLogoMetadata = {
  id: "square-code",
  baseId: "square-code",
  variant: "default",
  name: "Square Code",
  category: "square",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareCodeLogo;
