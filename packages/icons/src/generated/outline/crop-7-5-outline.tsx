/**
 * Auto-generated logo component: Crop 7 5 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Crop75OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Crop75OutlineLogo = React.forwardRef<SVGSVGElement, Crop75OutlineLogoProps>(
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
      <path d="M4 8a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -8" />
    </svg>
  )
);

Crop75OutlineLogo.displayName = "Crop75OutlineLogo";

export const Crop75OutlineLogoMetadata = {
  id: "crop-7-5-outline",
  baseId: "crop-7-5-outline",
  variant: "default",
  name: "Crop 7 5 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Crop75OutlineLogo;
