/**
 * Auto-generated logo component: Fish Hook Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FishHookOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FishHookOffOutlineLogo = React.forwardRef<SVGSVGElement, FishHookOffOutlineLogoProps>(
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
      <path d="M16 9v3m-.085 3.924a5 5 0 0 1 -9.915 -.924v-4l3 3" />
  <path d="M14 7a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M16 5v-2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

FishHookOffOutlineLogo.displayName = "FishHookOffOutlineLogo";

export const FishHookOffOutlineLogoMetadata = {
  id: "fish-hook-off-outline",
  baseId: "fish-hook-off-outline",
  variant: "default",
  name: "Fish Hook Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FishHookOffOutlineLogo;
