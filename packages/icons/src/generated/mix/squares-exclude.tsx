/**
 * Auto-generated logo component: Squares Exclude (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquaresExcludeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquaresExcludeLogo = React.forwardRef<SVGSVGElement, SquaresExcludeLogoProps>(
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
      <path d="M16 12v2a2 2 0 0 1-2 2H9a1 1 0 0 0-1 1v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h0" />
  <path d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1h-5a2 2 0 0 0-2 2v2" />
    </svg>
  )
);

SquaresExcludeLogo.displayName = "SquaresExcludeLogo";

export const SquaresExcludeLogoMetadata = {
  id: "squares-exclude",
  baseId: "squares-exclude",
  variant: "default",
  name: "Squares Exclude",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquaresExcludeLogo;
