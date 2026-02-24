/**
 * Auto-generated logo component: Lens Concave (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LensConcaveLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LensConcaveLogo = React.forwardRef<SVGSVGElement, LensConcaveLogoProps>(
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
      <path d="M7 2a1 1 0 0 0-.8 1.6 14 14 0 0 1 0 16.8A1 1 0 0 0 7 22h10a1 1 0 0 0 .8-1.6 14 14 0 0 1 0-16.8A1 1 0 0 0 17 2z" />
    </svg>
  )
);

LensConcaveLogo.displayName = "LensConcaveLogo";

export const LensConcaveLogoMetadata = {
  id: "lens-concave",
  baseId: "lens-concave",
  variant: "default",
  name: "Lens Concave",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LensConcaveLogo;
