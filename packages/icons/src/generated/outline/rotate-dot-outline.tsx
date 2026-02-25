/**
 * Auto-generated logo component: Rotate Dot Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RotateDotOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RotateDotOutlineLogo = React.forwardRef<SVGSVGElement, RotateDotOutlineLogoProps>(
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
      <path d="M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5" />
  <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  )
);

RotateDotOutlineLogo.displayName = "RotateDotOutlineLogo";

export const RotateDotOutlineLogoMetadata = {
  id: "rotate-dot-outline",
  baseId: "rotate-dot-outline",
  variant: "default",
  name: "Rotate Dot Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RotateDotOutlineLogo;
