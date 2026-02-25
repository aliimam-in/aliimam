/**
 * Auto-generated logo component: Stretching Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StretchingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const StretchingOutlineLogo = React.forwardRef<SVGSVGElement, StretchingOutlineLogoProps>(
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
      <path d="M15 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M5 20l5 -.5l1 -2" />
  <path d="M18 20v-5h-5.5l2.5 -6.5l-5.5 1l1.5 2" />
    </svg>
  )
);

StretchingOutlineLogo.displayName = "StretchingOutlineLogo";

export const StretchingOutlineLogoMetadata = {
  id: "stretching-outline",
  baseId: "stretching-outline",
  variant: "default",
  name: "Stretching Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default StretchingOutlineLogo;
