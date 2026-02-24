/**
 * Auto-generated logo component: Compass (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CompassLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CompassLogo = React.forwardRef<SVGSVGElement, CompassLogoProps>(
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
      <circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
    </svg>
  )
);

CompassLogo.displayName = "CompassLogo";

export const CompassLogoMetadata = {
  id: "compass",
  baseId: "compass",
  variant: "default",
  name: "Compass",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CompassLogo;
