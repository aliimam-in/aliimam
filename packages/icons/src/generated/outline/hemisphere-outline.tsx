/**
 * Auto-generated logo component: Hemisphere Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HemisphereOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HemisphereOutlineLogo = React.forwardRef<SVGSVGElement, HemisphereOutlineLogoProps>(
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
      <path d="M3 9a9 3 0 1 0 18 0a9 3 0 1 0 -18 0" />
  <path d="M3 9a9 9 0 0 0 18 0" />
    </svg>
  )
);

HemisphereOutlineLogo.displayName = "HemisphereOutlineLogo";

export const HemisphereOutlineLogoMetadata = {
  id: "hemisphere-outline",
  baseId: "hemisphere-outline",
  variant: "default",
  name: "Hemisphere Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HemisphereOutlineLogo;
