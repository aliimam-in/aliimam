/**
 * Auto-generated logo component: Circle Plus 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CirclePlus2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CirclePlus2OutlineLogo = React.forwardRef<SVGSVGElement, CirclePlus2OutlineLogoProps>(
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
      <path d="M20.985 12.522a9 9 0 1 0 -8.475 8.464" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

CirclePlus2OutlineLogo.displayName = "CirclePlus2OutlineLogo";

export const CirclePlus2OutlineLogoMetadata = {
  id: "circle-plus-2-outline",
  baseId: "circle-plus-2-outline",
  variant: "default",
  name: "Circle Plus 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CirclePlus2OutlineLogo;
