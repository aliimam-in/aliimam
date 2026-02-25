/**
 * Auto-generated logo component: Chalkboard Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChalkboardOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChalkboardOffOutlineLogo = React.forwardRef<SVGSVGElement, ChalkboardOffOutlineLogoProps>(
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
      <path d="M8 19h-3a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2m4 0h10a2 2 0 0 1 2 2v10" />
  <path d="M17 17v1a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h4" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ChalkboardOffOutlineLogo.displayName = "ChalkboardOffOutlineLogo";

export const ChalkboardOffOutlineLogoMetadata = {
  id: "chalkboard-off-outline",
  baseId: "chalkboard-off-outline",
  variant: "default",
  name: "Chalkboard Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChalkboardOffOutlineLogo;
