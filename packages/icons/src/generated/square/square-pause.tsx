/**
 * Auto-generated logo component: Square Pause (default)
 * Category: square
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquarePauseLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquarePauseLogo = React.forwardRef<SVGSVGElement, SquarePauseLogoProps>(
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
  <line x1="10" x2="10" y1="15" y2="9" />
  <line x1="14" x2="14" y1="15" y2="9" />
    </svg>
  )
);

SquarePauseLogo.displayName = "SquarePauseLogo";

export const SquarePauseLogoMetadata = {
  id: "square-pause",
  baseId: "square-pause",
  variant: "default",
  name: "Square Pause",
  category: "square",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquarePauseLogo;
