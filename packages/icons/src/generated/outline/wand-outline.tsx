/**
 * Auto-generated logo component: Wand Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WandOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WandOutlineLogo = React.forwardRef<SVGSVGElement, WandOutlineLogoProps>(
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
      <path d="M6 21l15 -15l-3 -3l-15 15l3 3" />
  <path d="M15 6l3 3" />
  <path d="M9 3a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
  <path d="M19 13a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
    </svg>
  )
);

WandOutlineLogo.displayName = "WandOutlineLogo";

export const WandOutlineLogoMetadata = {
  id: "wand-outline",
  baseId: "wand-outline",
  variant: "default",
  name: "Wand Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WandOutlineLogo;
