/**
 * Auto-generated logo component: Trekking Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TrekkingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TrekkingOutlineLogo = React.forwardRef<SVGSVGElement, TrekkingOutlineLogoProps>(
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
      <path d="M11 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M7 21l2 -4" />
  <path d="M13 21v-4l-3 -3l1 -6l3 4l3 2" />
  <path d="M10 14l-1.827 -1.218a2 2 0 0 1 -.831 -2.15l.28 -1.117a2 2 0 0 1 1.939 -1.515h1.439l4 1l3 -2" />
  <path d="M17 12v9" />
  <path d="M16 20h2" />
    </svg>
  )
);

TrekkingOutlineLogo.displayName = "TrekkingOutlineLogo";

export const TrekkingOutlineLogoMetadata = {
  id: "trekking-outline",
  baseId: "trekking-outline",
  variant: "default",
  name: "Trekking Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TrekkingOutlineLogo;
