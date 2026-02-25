/**
 * Auto-generated logo component: Sphere Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SphereOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SphereOutlineLogo = React.forwardRef<SVGSVGElement, SphereOutlineLogoProps>(
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
      <path d="M3 12c0 1.657 4.03 3 9 3s9 -1.343 9 -3" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    </svg>
  )
);

SphereOutlineLogo.displayName = "SphereOutlineLogo";

export const SphereOutlineLogoMetadata = {
  id: "sphere-outline",
  baseId: "sphere-outline",
  variant: "default",
  name: "Sphere Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SphereOutlineLogo;
