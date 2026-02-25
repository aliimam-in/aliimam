/**
 * Auto-generated logo component: Sword Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SwordOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SwordOffOutlineLogo = React.forwardRef<SVGSVGElement, SwordOffOutlineLogoProps>(
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
      <path d="M11.938 7.937l3.062 -3.937h5v5l-3.928 3.055m-2.259 1.757l-2.813 2.188l-4 4l-3 -3l4 -4l2.19 -2.815" />
  <path d="M6.5 11.5l6 6" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

SwordOffOutlineLogo.displayName = "SwordOffOutlineLogo";

export const SwordOffOutlineLogoMetadata = {
  id: "sword-off-outline",
  baseId: "sword-off-outline",
  variant: "default",
  name: "Sword Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SwordOffOutlineLogo;
