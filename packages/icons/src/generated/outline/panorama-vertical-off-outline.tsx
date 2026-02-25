/**
 * Auto-generated logo component: Panorama Vertical Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PanoramaVerticalOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PanoramaVerticalOffOutlineLogo = React.forwardRef<SVGSVGElement, PanoramaVerticalOffOutlineLogoProps>(
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
      <path d="M7 3h10.53c.693 0 1.18 .691 .935 1.338c-1.098 2.898 -1.573 5.795 -1.425 8.692m.828 4.847c.172 .592 .37 1.185 .595 1.778a1 1 0 0 1 -.934 1.345h-11c-.692 0 -1.208 -.692 -.962 -1.34c1.697 -4.486 1.903 -8.973 .619 -13.46" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

PanoramaVerticalOffOutlineLogo.displayName = "PanoramaVerticalOffOutlineLogo";

export const PanoramaVerticalOffOutlineLogoMetadata = {
  id: "panorama-vertical-off-outline",
  baseId: "panorama-vertical-off-outline",
  variant: "default",
  name: "Panorama Vertical Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PanoramaVerticalOffOutlineLogo;
