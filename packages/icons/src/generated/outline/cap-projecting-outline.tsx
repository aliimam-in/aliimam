/**
 * Auto-generated logo component: Cap Projecting Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CapProjectingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CapProjectingOutlineLogo = React.forwardRef<SVGSVGElement, CapProjectingOutlineLogoProps>(
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
      <path d="M20 6h-13a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h13" />
  <path d="M13 12a2 2 0 1 1 -4 0a2 2 0 0 1 4 0" />
  <path d="M13 12h7" />
    </svg>
  )
);

CapProjectingOutlineLogo.displayName = "CapProjectingOutlineLogo";

export const CapProjectingOutlineLogoMetadata = {
  id: "cap-projecting-outline",
  baseId: "cap-projecting-outline",
  variant: "default",
  name: "Cap Projecting Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CapProjectingOutlineLogo;
