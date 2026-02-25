/**
 * Auto-generated logo component: Crop 5 4 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Crop54OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Crop54OutlineLogo = React.forwardRef<SVGSVGElement, Crop54OutlineLogoProps>(
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
      <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -10" />
    </svg>
  )
);

Crop54OutlineLogo.displayName = "Crop54OutlineLogo";

export const Crop54OutlineLogoMetadata = {
  id: "crop-5-4-outline",
  baseId: "crop-5-4-outline",
  variant: "default",
  name: "Crop 5 4 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Crop54OutlineLogo;
