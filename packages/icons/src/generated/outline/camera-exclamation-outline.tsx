/**
 * Auto-generated logo component: Camera Exclamation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CameraExclamationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CameraExclamationOutlineLogo = React.forwardRef<SVGSVGElement, CameraExclamationOutlineLogoProps>(
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
      <path d="M15 20h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v3.5" />
  <path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
  <path d="M19 16v3" />
  <path d="M19 22v.01" />
    </svg>
  )
);

CameraExclamationOutlineLogo.displayName = "CameraExclamationOutlineLogo";

export const CameraExclamationOutlineLogoMetadata = {
  id: "camera-exclamation-outline",
  baseId: "camera-exclamation-outline",
  variant: "default",
  name: "Camera Exclamation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CameraExclamationOutlineLogo;
