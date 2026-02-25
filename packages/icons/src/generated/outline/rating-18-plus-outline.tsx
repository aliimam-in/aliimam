/**
 * Auto-generated logo component: Rating 18 Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Rating18PlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Rating18PlusOutlineLogo = React.forwardRef<SVGSVGElement, Rating18PlusOutlineLogoProps>(
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
  <path d="M10 10.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
  <path d="M10 13.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
  <path d="M7 15v-6" />
  <path d="M15.5 12h3" />
  <path d="M17 10.5v3" />
    </svg>
  )
);

Rating18PlusOutlineLogo.displayName = "Rating18PlusOutlineLogo";

export const Rating18PlusOutlineLogoMetadata = {
  id: "rating-18-plus-outline",
  baseId: "rating-18-plus-outline",
  variant: "default",
  name: "Rating 18 Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Rating18PlusOutlineLogo;
