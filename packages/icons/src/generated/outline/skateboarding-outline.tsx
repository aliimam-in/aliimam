/**
 * Auto-generated logo component: Skateboarding Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SkateboardingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SkateboardingOutlineLogo = React.forwardRef<SVGSVGElement, SkateboardingOutlineLogoProps>(
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
      <path d="M16 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  <path d="M5.5 15h3.5l.75 -1.5" />
  <path d="M14 19v-5l-2.5 -3l2.5 -4" />
  <path d="M8 8l3 -1h4l1 3h3" />
  <path d="M17.5 21a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1" fill="currentColor" />
  <path d="M3 18c0 .552 .895 1 2 1h14c1.105 0 2 -.448 2 -1" />
  <path d="M6.5 21a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1" fill="currentColor" />
    </svg>
  )
);

SkateboardingOutlineLogo.displayName = "SkateboardingOutlineLogo";

export const SkateboardingOutlineLogoMetadata = {
  id: "skateboarding-outline",
  baseId: "skateboarding-outline",
  variant: "default",
  name: "Skateboarding Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SkateboardingOutlineLogo;
