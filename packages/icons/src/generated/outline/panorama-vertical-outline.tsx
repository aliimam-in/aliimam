/**
 * Auto-generated logo component: Panorama Vertical Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PanoramaVerticalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PanoramaVerticalOutlineLogo = React.forwardRef<SVGSVGElement, PanoramaVerticalOutlineLogoProps>(
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
      <path d="M18.463 4.338c-1.932 5.106 -1.932 10.211 0 15.317a1 1 0 0 1 -.934 1.345h-11c-.692 0 -1.208 -.692 -.962 -1.34c1.932 -5.107 1.932 -10.214 0 -15.321c-.246 -.648 .243 -1.339 .935 -1.339h11.028c.693 0 1.18 .691 .935 1.338l-.002 0" />
    </svg>
  )
);

PanoramaVerticalOutlineLogo.displayName = "PanoramaVerticalOutlineLogo";

export const PanoramaVerticalOutlineLogoMetadata = {
  id: "panorama-vertical-outline",
  baseId: "panorama-vertical-outline",
  variant: "default",
  name: "Panorama Vertical Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PanoramaVerticalOutlineLogo;
