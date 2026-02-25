/**
 * Auto-generated logo component: Circle Arrow Down Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleArrowDownLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleArrowDownLeftOutlineLogo = React.forwardRef<SVGSVGElement, CircleArrowDownLeftOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
  <path d="M15 9l-6 6" />
  <path d="M15 15h-6v-6" />
    </svg>
  )
);

CircleArrowDownLeftOutlineLogo.displayName = "CircleArrowDownLeftOutlineLogo";

export const CircleArrowDownLeftOutlineLogoMetadata = {
  id: "circle-arrow-down-left-outline",
  baseId: "circle-arrow-down-left-outline",
  variant: "default",
  name: "Circle Arrow Down Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleArrowDownLeftOutlineLogo;
