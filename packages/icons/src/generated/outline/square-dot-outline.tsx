/**
 * Auto-generated logo component: Square Dot Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareDotOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareDotOutlineLogo = React.forwardRef<SVGSVGElement, SquareDotOutlineLogoProps>(
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
      <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
  <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  )
);

SquareDotOutlineLogo.displayName = "SquareDotOutlineLogo";

export const SquareDotOutlineLogoMetadata = {
  id: "square-dot-outline",
  baseId: "square-dot-outline",
  variant: "default",
  name: "Square Dot Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareDotOutlineLogo;
