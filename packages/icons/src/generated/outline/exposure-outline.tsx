/**
 * Auto-generated logo component: Exposure Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ExposureOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ExposureOutlineLogo = React.forwardRef<SVGSVGElement, ExposureOutlineLogoProps>(
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
      <path d="M3.6 20.4l16.8 -16.8" />
  <path d="M6 8h4m-2 -2v4" />
  <path d="M14 16h4" />
  <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -14" />
    </svg>
  )
);

ExposureOutlineLogo.displayName = "ExposureOutlineLogo";

export const ExposureOutlineLogoMetadata = {
  id: "exposure-outline",
  baseId: "exposure-outline",
  variant: "default",
  name: "Exposure Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ExposureOutlineLogo;
