/**
 * Auto-generated logo component: Clothes Rack Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClothesRackOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClothesRackOutlineLogo = React.forwardRef<SVGSVGElement, ClothesRackOutlineLogoProps>(
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
  <path d="M12 7v14" />
  <path d="M9 21h6" />
  <path d="M7.757 9.243a6 6 0 0 0 8.486 0" />
    </svg>
  )
);

ClothesRackOutlineLogo.displayName = "ClothesRackOutlineLogo";

export const ClothesRackOutlineLogoMetadata = {
  id: "clothes-rack-outline",
  baseId: "clothes-rack-outline",
  variant: "default",
  name: "Clothes Rack Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClothesRackOutlineLogo;
