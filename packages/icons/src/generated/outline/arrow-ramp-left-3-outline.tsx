/**
 * Auto-generated logo component: Arrow Ramp Left 3 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowRampLeft3OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowRampLeft3OutlineLogo = React.forwardRef<SVGSVGElement, ArrowRampLeft3OutlineLogoProps>(
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
      <path d="M18 3v6" />
  <path d="M8 16l-4 -4l4 -4" />
  <path d="M18 21v-6a3 3 0 0 0 -3 -3h-11" />
    </svg>
  )
);

ArrowRampLeft3OutlineLogo.displayName = "ArrowRampLeft3OutlineLogo";

export const ArrowRampLeft3OutlineLogoMetadata = {
  id: "arrow-ramp-left-3-outline",
  baseId: "arrow-ramp-left-3-outline",
  variant: "default",
  name: "Arrow Ramp Left 3 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowRampLeft3OutlineLogo;
