/**
 * Auto-generated logo component: Panorama Horizontal Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PanoramaHorizontalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PanoramaHorizontalOutlineLogo = React.forwardRef<SVGSVGElement, PanoramaHorizontalOutlineLogoProps>(
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
      <path d="M4.338 5.53c5.106 1.932 10.211 1.932 15.317 0a1 1 0 0 1 1.345 .934v11c0 .692 -.692 1.2 -1.34 .962c-5.107 -1.932 -10.214 -1.932 -15.321 0c-.648 .246 -1.339 -.242 -1.339 -.935v-11.027a1 1 0 0 1 1.338 -.935l0 .001" />
    </svg>
  )
);

PanoramaHorizontalOutlineLogo.displayName = "PanoramaHorizontalOutlineLogo";

export const PanoramaHorizontalOutlineLogoMetadata = {
  id: "panorama-horizontal-outline",
  baseId: "panorama-horizontal-outline",
  variant: "default",
  name: "Panorama Horizontal Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PanoramaHorizontalOutlineLogo;
