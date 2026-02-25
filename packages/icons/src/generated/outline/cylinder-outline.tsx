/**
 * Auto-generated logo component: Cylinder Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CylinderOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CylinderOutlineLogo = React.forwardRef<SVGSVGElement, CylinderOutlineLogoProps>(
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
  <path d="M5 6v12c0 1.657 3.134 3 7 3s7 -1.343 7 -3v-12" />
    </svg>
  )
);

CylinderOutlineLogo.displayName = "CylinderOutlineLogo";

export const CylinderOutlineLogoMetadata = {
  id: "cylinder-outline",
  baseId: "cylinder-outline",
  variant: "default",
  name: "Cylinder Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CylinderOutlineLogo;
