/**
 * Auto-generated logo component: Circle Arrow Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleArrowDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleArrowDownOutlineLogo = React.forwardRef<SVGSVGElement, CircleArrowDownOutlineLogoProps>(
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
  <path d="M8 12l4 4" />
  <path d="M12 8v8" />
  <path d="M16 12l-4 4" />
    </svg>
  )
);

CircleArrowDownOutlineLogo.displayName = "CircleArrowDownOutlineLogo";

export const CircleArrowDownOutlineLogoMetadata = {
  id: "circle-arrow-down-outline",
  baseId: "circle-arrow-down-outline",
  variant: "default",
  name: "Circle Arrow Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleArrowDownOutlineLogo;
