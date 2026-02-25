/**
 * Auto-generated logo component: Vs Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VsOutlineLogo = React.forwardRef<SVGSVGElement, VsOutlineLogoProps>(
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
      <path d="M2 12c0 5.523 4.477 10 10 10s10 -4.477 10 -10s-4.477 -10 -10 -10s-10 4.477 -10 10" />
  <path d="M14 14.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" />
  <path d="M7 9l2 6l2 -6" />
    </svg>
  )
);

VsOutlineLogo.displayName = "VsOutlineLogo";

export const VsOutlineLogoMetadata = {
  id: "vs-outline",
  baseId: "vs-outline",
  variant: "default",
  name: "Vs Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VsOutlineLogo;
