/**
 * Auto-generated logo component: Scale 3d (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Scale3dLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Scale3dLogo = React.forwardRef<SVGSVGElement, Scale3dLogoProps>(
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
      <path d="M5 7v11a1 1 0 0 0 1 1h11" />
  <path d="M5.293 18.707 11 13" />
  <circle cx="19" cy="19" r="2" />
  <circle cx="5" cy="5" r="2" />
    </svg>
  )
);

Scale3dLogo.displayName = "Scale3dLogo";

export const Scale3dLogoMetadata = {
  id: "scale-3d",
  baseId: "scale-3d",
  variant: "default",
  name: "Scale 3d",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Scale3dLogo;
