/**
 * Auto-generated logo component: Fish Hook Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FishHookOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FishHookOutlineLogo = React.forwardRef<SVGSVGElement, FishHookOutlineLogoProps>(
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
      <path d="M16 9v6a5 5 0 0 1 -10 0v-4l3 3" />
  <path d="M14 7a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M16 5v-2" />
    </svg>
  )
);

FishHookOutlineLogo.displayName = "FishHookOutlineLogo";

export const FishHookOutlineLogoMetadata = {
  id: "fish-hook-outline",
  baseId: "fish-hook-outline",
  variant: "default",
  name: "Fish Hook Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FishHookOutlineLogo;
