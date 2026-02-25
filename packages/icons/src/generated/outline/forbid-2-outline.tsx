/**
 * Auto-generated logo component: Forbid 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Forbid2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Forbid2OutlineLogo = React.forwardRef<SVGSVGElement, Forbid2OutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M9 15l6 -6" />
    </svg>
  )
);

Forbid2OutlineLogo.displayName = "Forbid2OutlineLogo";

export const Forbid2OutlineLogoMetadata = {
  id: "forbid-2-outline",
  baseId: "forbid-2-outline",
  variant: "default",
  name: "Forbid 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Forbid2OutlineLogo;
