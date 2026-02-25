/**
 * Auto-generated logo component: Mountain Snow (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MountainSnowLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MountainSnowLogo = React.forwardRef<SVGSVGElement, MountainSnowLogoProps>(
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
  <path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" />
    </svg>
  )
);

MountainSnowLogo.displayName = "MountainSnowLogo";

export const MountainSnowLogoMetadata = {
  id: "mountain-snow",
  baseId: "mountain-snow",
  variant: "default",
  name: "Mountain Snow",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MountainSnowLogo;
