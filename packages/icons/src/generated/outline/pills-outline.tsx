/**
 * Auto-generated logo component: Pills Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PillsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PillsOutlineLogo = React.forwardRef<SVGSVGElement, PillsOutlineLogoProps>(
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
      <path d="M3 8a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
  <path d="M13 17a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path d="M4.5 4.5l7 7" />
  <path d="M19.5 14.5l-5 5" />
    </svg>
  )
);

PillsOutlineLogo.displayName = "PillsOutlineLogo";

export const PillsOutlineLogoMetadata = {
  id: "pills-outline",
  baseId: "pills-outline",
  variant: "default",
  name: "Pills Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PillsOutlineLogo;
