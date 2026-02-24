/**
 * Auto-generated logo component: Rotate Ccw Square (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RotateCcwSquareLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RotateCcwSquareLogo = React.forwardRef<SVGSVGElement, RotateCcwSquareLogoProps>(
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
      <path d="M20 9V7a2 2 0 0 0-2-2h-6" />
  <path d="m15 2-3 3 3 3" />
  <path d="M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" />
    </svg>
  )
);

RotateCcwSquareLogo.displayName = "RotateCcwSquareLogo";

export const RotateCcwSquareLogoMetadata = {
  id: "rotate-ccw-square",
  baseId: "rotate-ccw-square",
  variant: "default",
  name: "Rotate Ccw Square",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RotateCcwSquareLogo;
