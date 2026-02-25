/**
 * Auto-generated logo component: Blind Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BlindOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BlindOutlineLogo = React.forwardRef<SVGSVGElement, BlindOutlineLogoProps>(
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
      <path d="M9 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  <path d="M4 21l3 -4" />
  <path d="M13 21l-2 -4l-3 -3l1 -6" />
  <path d="M3 12l2 -3l4 -1l6 4" />
  <path d="M16.5 14l3.5 7" />
    </svg>
  )
);

BlindOutlineLogo.displayName = "BlindOutlineLogo";

export const BlindOutlineLogoMetadata = {
  id: "blind-outline",
  baseId: "blind-outline",
  variant: "default",
  name: "Blind Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BlindOutlineLogo;
