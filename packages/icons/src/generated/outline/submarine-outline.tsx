/**
 * Auto-generated logo component: Submarine Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SubmarineOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SubmarineOutlineLogo = React.forwardRef<SVGSVGElement, SubmarineOutlineLogoProps>(
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
      <path d="M3 11v6h2l1 -1.5l3 1.5h10a3 3 0 0 0 0 -6h-10l-3 1.5l-1 -1.5h-2" />
  <path d="M17 11l-1 -3h-5l-1 3" />
  <path d="M13 8v-2a1 1 0 0 1 1 -1h1" />
    </svg>
  )
);

SubmarineOutlineLogo.displayName = "SubmarineOutlineLogo";

export const SubmarineOutlineLogoMetadata = {
  id: "submarine-outline",
  baseId: "submarine-outline",
  variant: "default",
  name: "Submarine Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SubmarineOutlineLogo;
