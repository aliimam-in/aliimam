/**
 * Auto-generated logo component: Corner Left Up (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CornerLeftUpLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CornerLeftUpLogo = React.forwardRef<SVGSVGElement, CornerLeftUpLogoProps>(
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
      <polyline points="14 9 9 4 4 9"/><path d="M20 20h-7a4 4 0 0 1-4-4V4"/>
    </svg>
  )
);

CornerLeftUpLogo.displayName = "CornerLeftUpLogo";

export const CornerLeftUpLogoMetadata = {
  id: "corner-left-up",
  baseId: "corner-left-up",
  variant: "default",
  name: "Corner Left Up",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CornerLeftUpLogo;
