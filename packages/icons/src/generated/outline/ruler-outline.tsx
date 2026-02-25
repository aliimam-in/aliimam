/**
 * Auto-generated logo component: Ruler Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RulerOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RulerOutlineLogo = React.forwardRef<SVGSVGElement, RulerOutlineLogoProps>(
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
      <path d="M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1" />
  <path d="M4 8l2 0" />
  <path d="M4 12l3 0" />
  <path d="M4 16l2 0" />
  <path d="M8 4l0 2" />
  <path d="M12 4l0 3" />
  <path d="M16 4l0 2" />
    </svg>
  )
);

RulerOutlineLogo.displayName = "RulerOutlineLogo";

export const RulerOutlineLogoMetadata = {
  id: "ruler-outline",
  baseId: "ruler-outline",
  variant: "default",
  name: "Ruler Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RulerOutlineLogo;
