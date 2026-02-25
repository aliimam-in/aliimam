/**
 * Auto-generated logo component: Camera Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CameraCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CameraCheckOutlineLogo = React.forwardRef<SVGSVGElement, CameraCheckOutlineLogoProps>(
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
      <path d="M11 20h-6a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v4" />
  <path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
  <path d="M15 19l2 2l4 -4" />
    </svg>
  )
);

CameraCheckOutlineLogo.displayName = "CameraCheckOutlineLogo";

export const CameraCheckOutlineLogoMetadata = {
  id: "camera-check-outline",
  baseId: "camera-check-outline",
  variant: "default",
  name: "Camera Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CameraCheckOutlineLogo;
