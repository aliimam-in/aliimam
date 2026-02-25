/**
 * Auto-generated logo component: Arrows Join Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsJoinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsJoinOutlineLogo = React.forwardRef<SVGSVGElement, ArrowsJoinOutlineLogoProps>(
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
      <path d="M3 7h5l3.5 5h9.5" />
  <path d="M3 17h5l3.495 -5" />
  <path d="M18 15l3 -3l-3 -3" />
    </svg>
  )
);

ArrowsJoinOutlineLogo.displayName = "ArrowsJoinOutlineLogo";

export const ArrowsJoinOutlineLogoMetadata = {
  id: "arrows-join-outline",
  baseId: "arrows-join-outline",
  variant: "default",
  name: "Arrows Join Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsJoinOutlineLogo;
