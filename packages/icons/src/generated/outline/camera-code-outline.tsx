/**
 * Auto-generated logo component: Camera Code Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CameraCodeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CameraCodeOutlineLogo = React.forwardRef<SVGSVGElement, CameraCodeOutlineLogoProps>(
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
  <path d="M14.948 13.559a3 3 0 1 0 -2.58 2.419" />
  <path d="M20 21l2 -2l-2 -2" />
  <path d="M17 17l-2 2l2 2" />
    </svg>
  )
);

CameraCodeOutlineLogo.displayName = "CameraCodeOutlineLogo";

export const CameraCodeOutlineLogoMetadata = {
  id: "camera-code-outline",
  baseId: "camera-code-outline",
  variant: "default",
  name: "Camera Code Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CameraCodeOutlineLogo;
