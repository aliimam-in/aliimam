/**
 * Auto-generated logo component: Hemisphere Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HemispherePlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HemispherePlusOutlineLogo = React.forwardRef<SVGSVGElement, HemispherePlusOutlineLogoProps>(
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
      <path d="M3 9a9 3 0 1 0 18 0a9 3 0 1 0 -18 0" />
  <path d="M3 9a9 9 0 0 0 9 9m8.396 -5.752a8.978 8.978 0 0 0 .604 -3.248" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

HemispherePlusOutlineLogo.displayName = "HemispherePlusOutlineLogo";

export const HemispherePlusOutlineLogoMetadata = {
  id: "hemisphere-plus-outline",
  baseId: "hemisphere-plus-outline",
  variant: "default",
  name: "Hemisphere Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HemispherePlusOutlineLogo;
