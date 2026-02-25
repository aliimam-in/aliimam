/**
 * Auto-generated logo component: Mirror Rectangular (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MirrorRectangularLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MirrorRectangularLogo = React.forwardRef<SVGSVGElement, MirrorRectangularLogoProps>(
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
      <path d="M11 6 8 9" />
  <path d="m16 7-8 8" />
  <rect x="4" y="2" width="16" height="20" rx="2" />
    </svg>
  )
);

MirrorRectangularLogo.displayName = "MirrorRectangularLogo";

export const MirrorRectangularLogoMetadata = {
  id: "mirror-rectangular",
  baseId: "mirror-rectangular",
  variant: "default",
  name: "Mirror Rectangular",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MirrorRectangularLogo;
