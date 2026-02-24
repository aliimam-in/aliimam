/**
 * Auto-generated logo component: Square User (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareUserLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareUserLogo = React.forwardRef<SVGSVGElement, SquareUserLogoProps>(
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
  <circle cx="12" cy="10" r="3" />
  <path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
    </svg>
  )
);

SquareUserLogo.displayName = "SquareUserLogo";

export const SquareUserLogoMetadata = {
  id: "square-user",
  baseId: "square-user",
  variant: "default",
  name: "Square User",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareUserLogo;
