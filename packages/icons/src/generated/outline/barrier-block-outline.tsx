/**
 * Auto-generated logo component: Barrier Block Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BarrierBlockOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BarrierBlockOutlineLogo = React.forwardRef<SVGSVGElement, BarrierBlockOutlineLogoProps>(
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
      <path d="M4 8a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v7a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1l0 -7" />
  <path d="M7 16v4" />
  <path d="M7.5 16l9 -9" />
  <path d="M13.5 16l6.5 -6.5" />
  <path d="M4 13.5l6.5 -6.5" />
  <path d="M17 16v4" />
  <path d="M5 20h4" />
  <path d="M15 20h4" />
  <path d="M17 7v-2" />
  <path d="M7 7v-2" />
    </svg>
  )
);

BarrierBlockOutlineLogo.displayName = "BarrierBlockOutlineLogo";

export const BarrierBlockOutlineLogoMetadata = {
  id: "barrier-block-outline",
  baseId: "barrier-block-outline",
  variant: "default",
  name: "Barrier Block Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BarrierBlockOutlineLogo;
