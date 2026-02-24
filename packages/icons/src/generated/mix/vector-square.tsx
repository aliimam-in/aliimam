/**
 * Auto-generated logo component: Vector Square (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VectorSquareLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VectorSquareLogo = React.forwardRef<SVGSVGElement, VectorSquareLogoProps>(
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
      <path d="M19.5 7a24 24 0 0 1 0 10" />
  <path d="M4.5 7a24 24 0 0 0 0 10" />
  <path d="M7 19.5a24 24 0 0 0 10 0" />
  <path d="M7 4.5a24 24 0 0 1 10 0" />
  <rect x="17" y="17" width="5" height="5" rx="1" />
  <rect x="17" y="2" width="5" height="5" rx="1" />
  <rect x="2" y="17" width="5" height="5" rx="1" />
  <rect x="2" y="2" width="5" height="5" rx="1" />
    </svg>
  )
);

VectorSquareLogo.displayName = "VectorSquareLogo";

export const VectorSquareLogoMetadata = {
  id: "vector-square",
  baseId: "vector-square",
  variant: "default",
  name: "Vector Square",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VectorSquareLogo;
