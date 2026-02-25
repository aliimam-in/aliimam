/**
 * Auto-generated logo component: Circle Chevron Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleChevronDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleChevronDownOutlineLogo = React.forwardRef<SVGSVGElement, CircleChevronDownOutlineLogoProps>(
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
      <path d="M15 11l-3 3l-3 -3" />
  <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
    </svg>
  )
);

CircleChevronDownOutlineLogo.displayName = "CircleChevronDownOutlineLogo";

export const CircleChevronDownOutlineLogoMetadata = {
  id: "circle-chevron-down-outline",
  baseId: "circle-chevron-down-outline",
  variant: "default",
  name: "Circle Chevron Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleChevronDownOutlineLogo;
