/**
 * Auto-generated logo component: Rating 14 Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Rating14PlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Rating14PlusOutlineLogo = React.forwardRef<SVGSVGElement, Rating14PlusOutlineLogoProps>(
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
  <path d="M7 15v-6" />
  <path d="M15.5 12h3" />
  <path d="M17 10.5v3" />
  <path d="M12.5 15v-6m-2.5 0v4h3" />
    </svg>
  )
);

Rating14PlusOutlineLogo.displayName = "Rating14PlusOutlineLogo";

export const Rating14PlusOutlineLogoMetadata = {
  id: "rating-14-plus-outline",
  baseId: "rating-14-plus-outline",
  variant: "default",
  name: "Rating 14 Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Rating14PlusOutlineLogo;
