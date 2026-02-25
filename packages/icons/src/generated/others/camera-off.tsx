/**
 * Auto-generated logo component: Camera Off (default)
 * Category: others
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
      <path d="M14.564 14.558a3 3 0 1 1-4.122-4.121" />
  <path d="m2 2 20 20" />
  <path d="M20 20H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 .819-.175" />
  <path d="M9.695 4.024A2 2 0 0 1 10.004 4h3.993a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v7.344" />
    </svg>
  )
);

CameraOffLogo.displayName = "CameraOffLogo";

export const CameraOffLogoMetadata = {
  id: "camera-off",
  baseId: "camera-off",
  variant: "default",
  name: "Camera Off",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CameraOffLogo;
