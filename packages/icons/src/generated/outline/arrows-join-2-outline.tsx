/**
 * Auto-generated logo component: Arrows Join 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsJoin2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsJoin2OutlineLogo = React.forwardRef<SVGSVGElement, ArrowsJoin2OutlineLogoProps>(
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
      <path d="M3 7h1.948c1.913 0 3.705 .933 4.802 2.5a5.861 5.861 0 0 0 4.802 2.5h6.448" />
  <path d="M3 17h1.95a5.854 5.854 0 0 0 4.798 -2.5a5.854 5.854 0 0 1 4.798 -2.5h5.454" />
  <path d="M18 15l3 -3l-3 -3" />
    </svg>
  )
);

ArrowsJoin2OutlineLogo.displayName = "ArrowsJoin2OutlineLogo";

export const ArrowsJoin2OutlineLogoMetadata = {
  id: "arrows-join-2-outline",
  baseId: "arrows-join-2-outline",
  variant: "default",
  name: "Arrows Join 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsJoin2OutlineLogo;
