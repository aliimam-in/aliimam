/**
 * Auto-generated logo component: Bold Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BoldOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BoldOffOutlineLogo = React.forwardRef<SVGSVGElement, BoldOffOutlineLogoProps>(
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
      <path d="M9 5h4a3.5 3.5 0 0 1 2.222 6.204m-3.222 .796h-5v-5" />
  <path d="M17.107 17.112a3.5 3.5 0 0 1 -3.107 1.888h-7v-7" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BoldOffOutlineLogo.displayName = "BoldOffOutlineLogo";

export const BoldOffOutlineLogoMetadata = {
  id: "bold-off-outline",
  baseId: "bold-off-outline",
  variant: "default",
  name: "Bold Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BoldOffOutlineLogo;
