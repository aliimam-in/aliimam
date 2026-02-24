/**
 * Auto-generated logo component: Cylinder (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CylinderLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CylinderLogo = React.forwardRef<SVGSVGElement, CylinderLogoProps>(
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
  <path d="M3 5v14a9 3 0 0 0 18 0V5" />
    </svg>
  )
);

CylinderLogo.displayName = "CylinderLogo";

export const CylinderLogoMetadata = {
  id: "cylinder",
  baseId: "cylinder",
  variant: "default",
  name: "Cylinder",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CylinderLogo;
