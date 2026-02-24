/**
 * Auto-generated logo component: Camera Off (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CameraOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CameraOffLogo = React.forwardRef<SVGSVGElement, CameraOffLogoProps>(
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
      <line x1="1" y1="1" x2="23" y2="23"/><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"/>
    </svg>
  )
);

CameraOffLogo.displayName = "CameraOffLogo";

export const CameraOffLogoMetadata = {
  id: "camera-off",
  baseId: "camera-off",
  variant: "default",
  name: "Camera Off",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CameraOffLogo;
