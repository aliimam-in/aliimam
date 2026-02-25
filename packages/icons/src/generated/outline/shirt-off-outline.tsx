/**
 * Auto-generated logo component: Shirt Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShirtOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShirtOffOutlineLogo = React.forwardRef<SVGSVGElement, ShirtOffOutlineLogoProps>(
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
      <path d="M8.243 4.252l.757 -.252c0 .43 .09 .837 .252 1.206m1.395 1.472a3 3 0 0 0 4.353 -2.678l6 2v5h-3v3m0 4v1a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l2.26 -.753" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ShirtOffOutlineLogo.displayName = "ShirtOffOutlineLogo";

export const ShirtOffOutlineLogoMetadata = {
  id: "shirt-off-outline",
  baseId: "shirt-off-outline",
  variant: "default",
  name: "Shirt Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShirtOffOutlineLogo;
