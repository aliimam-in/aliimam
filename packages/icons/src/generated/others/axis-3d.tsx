/**
 * Auto-generated logo component: Axis 3d (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Axis3dLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Axis3dLogo = React.forwardRef<SVGSVGElement, Axis3dLogoProps>(
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
      <path d="M13.5 10.5 15 9" />
  <path d="M4 4v15a1 1 0 0 0 1 1h15" />
  <path d="M4.293 19.707 6 18" />
  <path d="m9 15 1.5-1.5" />
    </svg>
  )
);

Axis3dLogo.displayName = "Axis3dLogo";

export const Axis3dLogoMetadata = {
  id: "axis-3d",
  baseId: "axis-3d",
  variant: "default",
  name: "Axis 3d",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Axis3dLogo;
