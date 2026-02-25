/**
 * Auto-generated logo component: Woman Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WomanOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WomanOutlineLogo = React.forwardRef<SVGSVGElement, WomanOutlineLogoProps>(
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
      <path d="M10 16v5" />
  <path d="M14 16v5" />
  <path d="M8 16h8l-2 -7h-4l-2 7" />
  <path d="M5 11c1.667 -1.333 3.333 -2 5 -2" />
  <path d="M19 11c-1.667 -1.333 -3.333 -2 -5 -2" />
  <path d="M10 4a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </svg>
  )
);

WomanOutlineLogo.displayName = "WomanOutlineLogo";

export const WomanOutlineLogoMetadata = {
  id: "woman-outline",
  baseId: "woman-outline",
  variant: "default",
  name: "Woman Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WomanOutlineLogo;
