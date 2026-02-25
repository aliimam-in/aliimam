/**
 * Auto-generated logo component: Bold Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BoldOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BoldOutlineLogo = React.forwardRef<SVGSVGElement, BoldOutlineLogoProps>(
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
      <path d="M7 5h6a3.5 3.5 0 0 1 0 7h-6l0 -7" />
  <path d="M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7" />
    </svg>
  )
);

BoldOutlineLogo.displayName = "BoldOutlineLogo";

export const BoldOutlineLogoMetadata = {
  id: "bold-outline",
  baseId: "bold-outline",
  variant: "default",
  name: "Bold Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BoldOutlineLogo;
