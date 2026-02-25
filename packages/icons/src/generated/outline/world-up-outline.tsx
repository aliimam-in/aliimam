/**
 * Auto-generated logo component: World Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WorldUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WorldUpOutlineLogo = React.forwardRef<SVGSVGElement, WorldUpOutlineLogoProps>(
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
      <path d="M20.985 12.52a9 9 0 1 0 -8.451 8.463" />
  <path d="M3.6 9h16.8" />
  <path d="M3.6 15h10.9" />
  <path d="M11.5 3a17 17 0 0 0 0 18" />
  <path d="M12.5 3a16.996 16.996 0 0 1 2.391 11.512" />
  <path d="M19 22v-6" />
  <path d="M22 19l-3 -3l-3 3" />
    </svg>
  )
);

WorldUpOutlineLogo.displayName = "WorldUpOutlineLogo";

export const WorldUpOutlineLogoMetadata = {
  id: "world-up-outline",
  baseId: "world-up-outline",
  variant: "default",
  name: "World Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WorldUpOutlineLogo;
