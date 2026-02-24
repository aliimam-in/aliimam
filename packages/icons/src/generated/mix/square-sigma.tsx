/**
 * Auto-generated logo component: Square Sigma (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareSigmaLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareSigmaLogo = React.forwardRef<SVGSVGElement, SquareSigmaLogoProps>(
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
  <path d="M16 8.9V7H8l4 5-4 5h8v-1.9" />
    </svg>
  )
);

SquareSigmaLogo.displayName = "SquareSigmaLogo";

export const SquareSigmaLogoMetadata = {
  id: "square-sigma",
  baseId: "square-sigma",
  variant: "default",
  name: "Square Sigma",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareSigmaLogo;
