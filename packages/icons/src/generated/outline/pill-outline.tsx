/**
 * Auto-generated logo component: Pill Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PillOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PillOutlineLogo = React.forwardRef<SVGSVGElement, PillOutlineLogoProps>(
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
      <path d="M4.5 12.5l8 -8a4.94 4.94 0 0 1 7 7l-8 8a4.94 4.94 0 0 1 -7 -7" />
  <path d="M8.5 8.5l7 7" />
    </svg>
  )
);

PillOutlineLogo.displayName = "PillOutlineLogo";

export const PillOutlineLogoMetadata = {
  id: "pill-outline",
  baseId: "pill-outline",
  variant: "default",
  name: "Pill Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PillOutlineLogo;
