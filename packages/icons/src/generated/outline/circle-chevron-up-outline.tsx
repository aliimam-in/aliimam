/**
 * Auto-generated logo component: Circle Chevron Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleChevronUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleChevronUpOutlineLogo = React.forwardRef<SVGSVGElement, CircleChevronUpOutlineLogoProps>(
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
      <path d="M9 13l3 -3l3 3" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    </svg>
  )
);

CircleChevronUpOutlineLogo.displayName = "CircleChevronUpOutlineLogo";

export const CircleChevronUpOutlineLogoMetadata = {
  id: "circle-chevron-up-outline",
  baseId: "circle-chevron-up-outline",
  variant: "default",
  name: "Circle Chevron Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleChevronUpOutlineLogo;
