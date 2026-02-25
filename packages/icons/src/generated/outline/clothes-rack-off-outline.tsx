/**
 * Auto-generated logo component: Clothes Rack Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClothesRackOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClothesRackOffOutlineLogo = React.forwardRef<SVGSVGElement, ClothesRackOffOutlineLogoProps>(
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
      <path d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M12 7v1m0 4v9" />
  <path d="M9 21h6" />
  <path d="M7.757 9.243a6 6 0 0 0 3.129 1.653m3.578 -.424a6 6 0 0 0 1.779 -1.229" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ClothesRackOffOutlineLogo.displayName = "ClothesRackOffOutlineLogo";

export const ClothesRackOffOutlineLogoMetadata = {
  id: "clothes-rack-off-outline",
  baseId: "clothes-rack-off-outline",
  variant: "default",
  name: "Clothes Rack Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClothesRackOffOutlineLogo;
