/**
 * Auto-generated logo component: Camera Selfie Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CameraSelfieOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CameraSelfieOutlineLogo = React.forwardRef<SVGSVGElement, CameraSelfieOutlineLogoProps>(
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
      <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
  <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
  <path d="M15 11l.01 0" />
  <path d="M9 11l.01 0" />
    </svg>
  )
);

CameraSelfieOutlineLogo.displayName = "CameraSelfieOutlineLogo";

export const CameraSelfieOutlineLogoMetadata = {
  id: "camera-selfie-outline",
  baseId: "camera-selfie-outline",
  variant: "default",
  name: "Camera Selfie Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CameraSelfieOutlineLogo;
