/**
 * Auto-generated logo component: Skull Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SkullOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SkullOutlineLogo = React.forwardRef<SVGSVGElement, SkullOutlineLogoProps>(
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
      <path d="M12 4c4.418 0 8 3.358 8 7.5c0 1.901 -.755 3.637 -2 4.96l0 2.54a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-2.54c-1.245 -1.322 -2 -3.058 -2 -4.96c0 -4.142 3.582 -7.5 8 -7.5" />
  <path d="M10 17v3" />
  <path d="M14 17v3" />
  <path d="M8 11a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M14 11a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  )
);

SkullOutlineLogo.displayName = "SkullOutlineLogo";

export const SkullOutlineLogoMetadata = {
  id: "skull-outline",
  baseId: "skull-outline",
  variant: "default",
  name: "Skull Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SkullOutlineLogo;
