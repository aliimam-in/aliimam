/**
 * Auto-generated logo component: Camera (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CameraLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CameraLogo = React.forwardRef<SVGSVGElement, CameraLogoProps>(
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
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>
    </svg>
  )
);

CameraLogo.displayName = "CameraLogo";

export const CameraLogoMetadata = {
  id: "camera",
  baseId: "camera",
  variant: "default",
  name: "Camera",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CameraLogo;
