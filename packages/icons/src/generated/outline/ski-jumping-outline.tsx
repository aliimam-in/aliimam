/**
 * Auto-generated logo component: Ski Jumping Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SkiJumpingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SkiJumpingOutlineLogo = React.forwardRef<SVGSVGElement, SkiJumpingOutlineLogoProps>(
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
      <path d="M11 3a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  <path d="M17 17.5l-5 -4.5v-6l5 4" />
  <path d="M7 17.5l5 -4.5" />
  <path d="M15.103 21.58l6.762 -14.502a2 2 0 0 0 -.968 -2.657" />
  <path d="M8.897 21.58l-6.762 -14.503a2 2 0 0 1 .968 -2.657" />
  <path d="M7 11l5 -4" />
    </svg>
  )
);

SkiJumpingOutlineLogo.displayName = "SkiJumpingOutlineLogo";

export const SkiJumpingOutlineLogoMetadata = {
  id: "ski-jumping-outline",
  baseId: "ski-jumping-outline",
  variant: "default",
  name: "Ski Jumping Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SkiJumpingOutlineLogo;
