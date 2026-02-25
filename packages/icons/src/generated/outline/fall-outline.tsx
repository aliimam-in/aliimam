/**
 * Auto-generated logo component: Fall Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FallOutlineLogo = React.forwardRef<SVGSVGElement, FallOutlineLogoProps>(
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
      <path d="M11 21l1 -5l-1 -4l-3 -4h4l3 -3" />
  <path d="M6 16l-1 -4l3 -4" />
  <path d="M5 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M13.5 12h2.5l4 2" />
    </svg>
  )
);

FallOutlineLogo.displayName = "FallOutlineLogo";

export const FallOutlineLogoMetadata = {
  id: "fall-outline",
  baseId: "fall-outline",
  variant: "default",
  name: "Fall Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FallOutlineLogo;
