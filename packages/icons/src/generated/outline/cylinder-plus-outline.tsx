/**
 * Auto-generated logo component: Cylinder Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CylinderPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CylinderPlusOutlineLogo = React.forwardRef<SVGSVGElement, CylinderPlusOutlineLogoProps>(
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
      <path d="M5 6a7 3 0 1 0 14 0a7 3 0 1 0 -14 0" />
  <path d="M5 6v12c0 1.657 3.134 3 7 3c.173 0 .345 -.003 .515 -.008m6.485 -8.992v-6" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

CylinderPlusOutlineLogo.displayName = "CylinderPlusOutlineLogo";

export const CylinderPlusOutlineLogoMetadata = {
  id: "cylinder-plus-outline",
  baseId: "cylinder-plus-outline",
  variant: "default",
  name: "Cylinder Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CylinderPlusOutlineLogo;
