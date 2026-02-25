/**
 * Auto-generated logo component: Crosshair Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CrosshairOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CrosshairOutlineLogo = React.forwardRef<SVGSVGElement, CrosshairOutlineLogoProps>(
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
      <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
  <path d="M4 16v2a2 2 0 0 0 2 2h2" />
  <path d="M16 4h2a2 2 0 0 1 2 2v2" />
  <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
  <path d="M9 12l6 0" />
  <path d="M12 9l0 6" />
    </svg>
  )
);

CrosshairOutlineLogo.displayName = "CrosshairOutlineLogo";

export const CrosshairOutlineLogoMetadata = {
  id: "crosshair-outline",
  baseId: "crosshair-outline",
  variant: "default",
  name: "Crosshair Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CrosshairOutlineLogo;
