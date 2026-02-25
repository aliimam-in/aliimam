/**
 * Auto-generated logo component: Mug Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MugOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MugOutlineLogo = React.forwardRef<SVGSVGElement, MugOutlineLogoProps>(
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
      <path d="M4.083 5h10.834a1.08 1.08 0 0 1 1.083 1.077v8.615c0 2.38 -1.94 4.308 -4.333 4.308h-4.334c-2.393 0 -4.333 -1.929 -4.333 -4.308v-8.615a1.08 1.08 0 0 1 1.083 -1.077" />
  <path d="M16 8h2.5c1.38 0 2.5 1.045 2.5 2.333v2.334c0 1.288 -1.12 2.333 -2.5 2.333h-2.5" />
    </svg>
  )
);

MugOutlineLogo.displayName = "MugOutlineLogo";

export const MugOutlineLogoMetadata = {
  id: "mug-outline",
  baseId: "mug-outline",
  variant: "default",
  name: "Mug Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MugOutlineLogo;
