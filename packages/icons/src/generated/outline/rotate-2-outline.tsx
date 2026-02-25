/**
 * Auto-generated logo component: Rotate 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Rotate2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Rotate2OutlineLogo = React.forwardRef<SVGSVGElement, Rotate2OutlineLogoProps>(
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
      <path d="M15 4.55a8 8 0 0 0 -6 14.9m0 -4.45v5h-5" />
  <path d="M18.37 7.16l0 .01" />
  <path d="M13 19.94l0 .01" />
  <path d="M16.84 18.37l0 .01" />
  <path d="M19.37 15.1l0 .01" />
  <path d="M19.94 11l0 .01" />
    </svg>
  )
);

Rotate2OutlineLogo.displayName = "Rotate2OutlineLogo";

export const Rotate2OutlineLogoMetadata = {
  id: "rotate-2-outline",
  baseId: "rotate-2-outline",
  variant: "default",
  name: "Rotate 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Rotate2OutlineLogo;
