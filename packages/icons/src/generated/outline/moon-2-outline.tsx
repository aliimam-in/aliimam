/**
 * Auto-generated logo component: Moon 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Moon2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Moon2OutlineLogo = React.forwardRef<SVGSVGElement, Moon2OutlineLogoProps>(
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
      <path d="M16.418 4.157a8 8 0 0 0 0 15.686" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    </svg>
  )
);

Moon2OutlineLogo.displayName = "Moon2OutlineLogo";

export const Moon2OutlineLogoMetadata = {
  id: "moon-2-outline",
  baseId: "moon-2-outline",
  variant: "default",
  name: "Moon 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Moon2OutlineLogo;
