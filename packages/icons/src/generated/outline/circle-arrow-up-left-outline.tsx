/**
 * Auto-generated logo component: Circle Arrow Up Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleArrowUpLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleArrowUpLeftOutlineLogo = React.forwardRef<SVGSVGElement, CircleArrowUpLeftOutlineLogoProps>(
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
  <path d="M9 9l6 6" />
  <path d="M15 9h-6v6" />
    </svg>
  )
);

CircleArrowUpLeftOutlineLogo.displayName = "CircleArrowUpLeftOutlineLogo";

export const CircleArrowUpLeftOutlineLogoMetadata = {
  id: "circle-arrow-up-left-outline",
  baseId: "circle-arrow-up-left-outline",
  variant: "default",
  name: "Circle Arrow Up Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleArrowUpLeftOutlineLogo;
