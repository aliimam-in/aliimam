/**
 * Auto-generated logo component: Rocket Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RocketOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RocketOutlineLogo = React.forwardRef<SVGSVGElement, RocketOutlineLogoProps>(
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
      <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />
  <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
  <path d="M14 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  )
);

RocketOutlineLogo.displayName = "RocketOutlineLogo";

export const RocketOutlineLogoMetadata = {
  id: "rocket-outline",
  baseId: "rocket-outline",
  variant: "default",
  name: "Rocket Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RocketOutlineLogo;
