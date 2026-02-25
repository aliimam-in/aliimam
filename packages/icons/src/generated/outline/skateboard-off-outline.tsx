/**
 * Auto-generated logo component: Skateboard Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SkateboardOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SkateboardOffOutlineLogo = React.forwardRef<SVGSVGElement, SkateboardOffOutlineLogoProps>(
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
      <path d="M5 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M15 15a2 2 0 0 0 2 2m2 -2a2 2 0 0 0 -2 -2" />
  <path d="M3 9c0 .552 .895 1 2 1h5m4 0h5c1.105 0 2 -.448 2 -1" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

SkateboardOffOutlineLogo.displayName = "SkateboardOffOutlineLogo";

export const SkateboardOffOutlineLogoMetadata = {
  id: "skateboard-off-outline",
  baseId: "skateboard-off-outline",
  variant: "default",
  name: "Skateboard Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SkateboardOffOutlineLogo;
