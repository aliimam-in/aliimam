/**
 * Auto-generated logo component: Camera Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CameraOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CameraOffOutlineLogo = React.forwardRef<SVGSVGElement, CameraOffOutlineLogoProps>(
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
      <path d="M8.297 4.289a.997 .997 0 0 1 .703 -.289h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v8m-1.187 2.828c-.249 .11 -.524 .172 -.813 .172h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1c.298 0 .58 -.065 .834 -.181" />
  <path d="M10.422 10.448a3 3 0 1 0 4.15 4.098" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

CameraOffOutlineLogo.displayName = "CameraOffOutlineLogo";

export const CameraOffOutlineLogoMetadata = {
  id: "camera-off-outline",
  baseId: "camera-off-outline",
  variant: "default",
  name: "Camera Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CameraOffOutlineLogo;
