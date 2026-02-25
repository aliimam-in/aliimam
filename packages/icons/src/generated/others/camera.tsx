/**
 * Auto-generated logo component: Camera (default)
 * Category: others
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
      <path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z" />
  <circle cx="12" cy="13" r="3" />
    </svg>
  )
);

CameraLogo.displayName = "CameraLogo";

export const CameraLogoMetadata = {
  id: "camera",
  baseId: "camera",
  variant: "default",
  name: "Camera",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CameraLogo;
