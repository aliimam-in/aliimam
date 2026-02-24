/**
 * Auto-generated logo component: Square Plus (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquarePlusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquarePlusLogo = React.forwardRef<SVGSVGElement, SquarePlusLogoProps>(
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
  <path d="M8 12h8" />
  <path d="M12 8v8" />
    </svg>
  )
);

SquarePlusLogo.displayName = "SquarePlusLogo";

export const SquarePlusLogoMetadata = {
  id: "square-plus",
  baseId: "square-plus",
  variant: "default",
  name: "Square Plus",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquarePlusLogo;
