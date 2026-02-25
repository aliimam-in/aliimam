/**
 * Auto-generated logo component: Deaf Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeafOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeafOutlineLogo = React.forwardRef<SVGSVGElement, DeafOutlineLogoProps>(
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
      <path d="M6 10a7 7 0 1 1 13 3.6a10 10 0 0 1 -2 2a8 8 0 0 0 -2 3a4.5 4.5 0 0 1 -6.8 1.4" />
  <path d="M10 10a3 3 0 1 1 5 2.2" />
  <path d="M5 13l4 4" />
  <path d="M9 13l-4 4" />
    </svg>
  )
);

DeafOutlineLogo.displayName = "DeafOutlineLogo";

export const DeafOutlineLogoMetadata = {
  id: "deaf-outline",
  baseId: "deaf-outline",
  variant: "default",
  name: "Deaf Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeafOutlineLogo;
