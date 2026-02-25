/**
 * Auto-generated logo component: Cylinder Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CylinderOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CylinderOffOutlineLogo = React.forwardRef<SVGSVGElement, CylinderOffOutlineLogoProps>(
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
      <path d="M5.23 5.233c-.15 .245 -.23 .502 -.23 .767c0 1.131 1.461 2.117 3.62 2.628m4.357 .343c3.404 -.204 6.023 -1.456 6.023 -2.971c0 -1.657 -3.134 -3 -7 -3c-1.645 0 -3.158 .243 -4.353 .65" />
  <path d="M5 6v12c0 1.657 3.134 3 7 3c3.245 0 5.974 -.946 6.767 -2.23m.233 -3.77v-9" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

CylinderOffOutlineLogo.displayName = "CylinderOffOutlineLogo";

export const CylinderOffOutlineLogoMetadata = {
  id: "cylinder-off-outline",
  baseId: "cylinder-off-outline",
  variant: "default",
  name: "Cylinder Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CylinderOffOutlineLogo;
