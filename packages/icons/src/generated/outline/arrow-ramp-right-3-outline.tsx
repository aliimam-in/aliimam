/**
 * Auto-generated logo component: Arrow Ramp Right 3 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowRampRight3OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowRampRight3OutlineLogo = React.forwardRef<SVGSVGElement, ArrowRampRight3OutlineLogoProps>(
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
      <path d="M6 3v6" />
  <path d="M16 16l4 -4l-4 -4" />
  <path d="M6 21v-6a3 3 0 0 1 3 -3h11" />
    </svg>
  )
);

ArrowRampRight3OutlineLogo.displayName = "ArrowRampRight3OutlineLogo";

export const ArrowRampRight3OutlineLogoMetadata = {
  id: "arrow-ramp-right-3-outline",
  baseId: "arrow-ramp-right-3-outline",
  variant: "default",
  name: "Arrow Ramp Right 3 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowRampRight3OutlineLogo;
