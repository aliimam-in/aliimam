/**
 * Auto-generated logo component: Square (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixSquareLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixSquareLogo = React.forwardRef<SVGSVGElement, MixSquareLogoProps>(
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
    </svg>
  )
);

MixSquareLogo.displayName = "MixSquareLogo";

export const MixSquareLogoMetadata = {
  id: "square",
  baseId: "square",
  variant: "default",
  name: "Square",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixSquareLogo;
