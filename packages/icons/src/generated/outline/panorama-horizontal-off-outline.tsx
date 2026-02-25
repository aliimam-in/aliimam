/**
 * Auto-generated logo component: Panorama Horizontal Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PanoramaHorizontalOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PanoramaHorizontalOffOutlineLogo = React.forwardRef<SVGSVGElement, PanoramaHorizontalOffOutlineLogoProps>(
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
      <path d="M10.95 6.952c2.901 .15 5.803 -.323 8.705 -1.42a1 1 0 0 1 1.345 .934v10.534m-3.212 .806c-4.483 -1.281 -8.966 -1.074 -13.449 .622a.993 .993 0 0 1 -1.339 -.935v-11.027a1 1 0 0 1 1.338 -.935c.588 .221 1.176 .418 1.764 .59" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

PanoramaHorizontalOffOutlineLogo.displayName = "PanoramaHorizontalOffOutlineLogo";

export const PanoramaHorizontalOffOutlineLogoMetadata = {
  id: "panorama-horizontal-off-outline",
  baseId: "panorama-horizontal-off-outline",
  variant: "default",
  name: "Panorama Horizontal Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PanoramaHorizontalOffOutlineLogo;
