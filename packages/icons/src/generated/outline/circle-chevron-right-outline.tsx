/**
 * Auto-generated logo component: Circle Chevron Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleChevronRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleChevronRightOutlineLogo = React.forwardRef<SVGSVGElement, CircleChevronRightOutlineLogoProps>(
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
      <path d="M11 9l3 3l-3 3" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
    </svg>
  )
);

CircleChevronRightOutlineLogo.displayName = "CircleChevronRightOutlineLogo";

export const CircleChevronRightOutlineLogoMetadata = {
  id: "circle-chevron-right-outline",
  baseId: "circle-chevron-right-outline",
  variant: "default",
  name: "Circle Chevron Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleChevronRightOutlineLogo;
