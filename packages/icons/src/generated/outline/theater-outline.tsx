/**
 * Auto-generated logo component: Theater Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TheaterOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TheaterOutlineLogo = React.forwardRef<SVGSVGElement, TheaterOutlineLogoProps>(
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
      <path d="M4 20h16" />
  <path d="M20 16v-10a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v10l4 -6c2.667 1.333 5.333 1.333 8 0l4 6" />
    </svg>
  )
);

TheaterOutlineLogo.displayName = "TheaterOutlineLogo";

export const TheaterOutlineLogoMetadata = {
  id: "theater-outline",
  baseId: "theater-outline",
  variant: "default",
  name: "Theater Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TheaterOutlineLogo;
