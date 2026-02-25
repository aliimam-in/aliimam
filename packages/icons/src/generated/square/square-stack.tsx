/**
 * Auto-generated logo component: Square Stack (default)
 * Category: square
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareStackLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareStackLogo = React.forwardRef<SVGSVGElement, SquareStackLogoProps>(
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
      <path d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" />
  <path d="M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" />
  <rect width="8" height="8" x="14" y="14" rx="2" />
    </svg>
  )
);

SquareStackLogo.displayName = "SquareStackLogo";

export const SquareStackLogoMetadata = {
  id: "square-stack",
  baseId: "square-stack",
  variant: "default",
  name: "Square Stack",
  category: "square",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareStackLogo;
