/**
 * Auto-generated logo component: Yoga Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface YogaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const YogaOutlineLogo = React.forwardRef<SVGSVGElement, YogaOutlineLogoProps>(
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
      <path d="M11 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M4 20h4l1.5 -3" />
  <path d="M17 20l-1 -5h-5l1 -7" />
  <path d="M4 10l4 -1l4 -1l4 1.5l4 1.5" />
    </svg>
  )
);

YogaOutlineLogo.displayName = "YogaOutlineLogo";

export const YogaOutlineLogoMetadata = {
  id: "yoga-outline",
  baseId: "yoga-outline",
  variant: "default",
  name: "Yoga Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default YogaOutlineLogo;
