/**
 * Auto-generated logo component: Cube 3d Sphere Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Cube3dSphereOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Cube3dSphereOffOutlineLogo = React.forwardRef<SVGSVGElement, Cube3dSphereOffOutlineLogoProps>(
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
      <path d="M6 17.6l-2 -1.1v-2.5" />
  <path d="M4 10v-2.5l2 -1.1" />
  <path d="M10 4.1l2 -1.1l2 1.1" />
  <path d="M18 6.4l2 1.1v2.5" />
  <path d="M20 14v2" />
  <path d="M14 19.9l-2 1.1l-2 -1.1" />
  <path d="M18 8.6l2 -1.1" />
  <path d="M12 12v2.5" />
  <path d="M12 18.5v2.5" />
  <path d="M12 12l-2 -1.12" />
  <path d="M6 8.6l-2 -1.1" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

Cube3dSphereOffOutlineLogo.displayName = "Cube3dSphereOffOutlineLogo";

export const Cube3dSphereOffOutlineLogoMetadata = {
  id: "cube-3d-sphere-off-outline",
  baseId: "cube-3d-sphere-off-outline",
  variant: "default",
  name: "Cube 3d Sphere Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Cube3dSphereOffOutlineLogo;
