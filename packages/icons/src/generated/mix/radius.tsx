/**
 * Auto-generated logo component: Radius (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RadiusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RadiusLogo = React.forwardRef<SVGSVGElement, RadiusLogoProps>(
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
      <path d="M20.34 17.52a10 10 0 1 0-2.82 2.82" />
  <circle cx="19" cy="19" r="2" />
  <path d="m13.41 13.41 4.18 4.18" />
  <circle cx="12" cy="12" r="2" />
    </svg>
  )
);

RadiusLogo.displayName = "RadiusLogo";

export const RadiusLogoMetadata = {
  id: "radius",
  baseId: "radius",
  variant: "default",
  name: "Radius",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RadiusLogo;
