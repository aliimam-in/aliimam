/**
 * Auto-generated logo component: Lighter Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LighterOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LighterOutlineLogo = React.forwardRef<SVGSVGElement, LighterOutlineLogoProps>(
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
      <path d="M10 3v16a2 2 0 0 0 2 2h5a2 2 0 0 0 2 -2v-7h-12a2 2 0 0 1 -2 -2v-5a2 2 0 0 1 2 -2h3" />
  <path d="M16 4l1.465 1.638a2 2 0 1 1 -3.015 .099l1.55 -1.737" />
    </svg>
  )
);

LighterOutlineLogo.displayName = "LighterOutlineLogo";

export const LighterOutlineLogoMetadata = {
  id: "lighter-outline",
  baseId: "lighter-outline",
  variant: "default",
  name: "Lighter Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LighterOutlineLogo;
