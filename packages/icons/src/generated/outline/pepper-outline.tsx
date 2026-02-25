/**
 * Auto-generated logo component: Pepper Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PepperOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PepperOutlineLogo = React.forwardRef<SVGSVGElement, PepperOutlineLogoProps>(
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
      <path d="M13 11c0 2.21 -2.239 4 -5 4s-5 -1.79 -5 -4a8 8 0 1 0 16 0a3 3 0 0 0 -6 0" />
  <path d="M16 8c0 -2 2 -4 4 -4" />
    </svg>
  )
);

PepperOutlineLogo.displayName = "PepperOutlineLogo";

export const PepperOutlineLogoMetadata = {
  id: "pepper-outline",
  baseId: "pepper-outline",
  variant: "default",
  name: "Pepper Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PepperOutlineLogo;
