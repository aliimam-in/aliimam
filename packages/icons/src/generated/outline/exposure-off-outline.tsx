/**
 * Auto-generated logo component: Exposure Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ExposureOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ExposureOffOutlineLogo = React.forwardRef<SVGSVGElement, ExposureOffOutlineLogoProps>(
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
      <path d="M3.6 20.4l8.371 -8.371m2.04 -2.04l6.389 -6.389" />
  <path d="M6 8h2m0 0v2" />
  <path d="M14 16h2" />
  <path d="M7 3h12a2 2 0 0 1 2 2v12m-.5 3.5c-.362 .36 -.95 .5 -1.5 .5h-14a2 2 0 0 1 -2 -2v-14c0 -.541 .215 -1.033 .565 -1.393" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ExposureOffOutlineLogo.displayName = "ExposureOffOutlineLogo";

export const ExposureOffOutlineLogoMetadata = {
  id: "exposure-off-outline",
  baseId: "exposure-off-outline",
  variant: "default",
  name: "Exposure Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ExposureOffOutlineLogo;
