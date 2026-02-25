/**
 * Auto-generated logo component: Ear Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EarOutlineLogo = React.forwardRef<SVGSVGElement, EarOutlineLogoProps>(
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
      <path d="M6 10a7 7 0 1 1 13 3.6a10 10 0 0 1 -2 2a8 8 0 0 0 -2 3a4.5 4.5 0 0 1 -6.8 1.4" />
  <path d="M10 10a3 3 0 1 1 5 2.2" />
    </svg>
  )
);

EarOutlineLogo.displayName = "EarOutlineLogo";

export const EarOutlineLogoMetadata = {
  id: "ear-outline",
  baseId: "ear-outline",
  variant: "default",
  name: "Ear Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EarOutlineLogo;
