/**
 * Auto-generated logo component: Stereo Glasses Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StereoGlassesOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const StereoGlassesOutlineLogo = React.forwardRef<SVGSVGElement, StereoGlassesOutlineLogoProps>(
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
      <path d="M8 3h-2l-3 9" />
  <path d="M16 3h2l3 9" />
  <path d="M3 12v7a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707 -.293l2 -2a1 1 0 0 1 1.414 0l2 2a1 1 0 0 0 .707 .293h4.586a1 1 0 0 0 1 -1v-7h-18" />
  <path d="M7 16h1" />
  <path d="M16 16h1" />
    </svg>
  )
);

StereoGlassesOutlineLogo.displayName = "StereoGlassesOutlineLogo";

export const StereoGlassesOutlineLogoMetadata = {
  id: "stereo-glasses-outline",
  baseId: "stereo-glasses-outline",
  variant: "default",
  name: "Stereo Glasses Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default StereoGlassesOutlineLogo;
