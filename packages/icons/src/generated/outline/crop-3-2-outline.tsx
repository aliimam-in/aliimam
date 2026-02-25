/**
 * Auto-generated logo component: Crop 3 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Crop32OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Crop32OutlineLogo = React.forwardRef<SVGSVGElement, Crop32OutlineLogoProps>(
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
      <path d="M4 9a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -6" />
    </svg>
  )
);

Crop32OutlineLogo.displayName = "Crop32OutlineLogo";

export const Crop32OutlineLogoMetadata = {
  id: "crop-3-2-outline",
  baseId: "crop-3-2-outline",
  variant: "default",
  name: "Crop 3 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Crop32OutlineLogo;
