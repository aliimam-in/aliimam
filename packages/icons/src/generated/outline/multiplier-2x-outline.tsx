/**
 * Auto-generated logo component: Multiplier 2x Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Multiplier2xOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Multiplier2xOutlineLogo = React.forwardRef<SVGSVGElement, Multiplier2xOutlineLogoProps>(
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
      <path d="M14 16l4 -4" />
  <path d="M18 16l-4 -4" />
  <path d="M6 10a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 0" />
    </svg>
  )
);

Multiplier2xOutlineLogo.displayName = "Multiplier2xOutlineLogo";

export const Multiplier2xOutlineLogoMetadata = {
  id: "multiplier-2x-outline",
  baseId: "multiplier-2x-outline",
  variant: "default",
  name: "Multiplier 2x Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Multiplier2xOutlineLogo;
