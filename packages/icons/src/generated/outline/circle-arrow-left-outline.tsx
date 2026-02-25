/**
 * Auto-generated logo component: Circle Arrow Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleArrowLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleArrowLeftOutlineLogo = React.forwardRef<SVGSVGElement, CircleArrowLeftOutlineLogoProps>(
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
      <path d="M12 21a9 9 0 1 0 0 -18a9 9 0 0 0 0 18" />
  <path d="M8 12l4 4" />
  <path d="M8 12h8" />
  <path d="M12 8l-4 4" />
    </svg>
  )
);

CircleArrowLeftOutlineLogo.displayName = "CircleArrowLeftOutlineLogo";

export const CircleArrowLeftOutlineLogoMetadata = {
  id: "circle-arrow-left-outline",
  baseId: "circle-arrow-left-outline",
  variant: "default",
  name: "Circle Arrow Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleArrowLeftOutlineLogo;
