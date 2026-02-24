/**
 * Auto-generated logo component: X Octagon (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface XOctagonLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const XOctagonLogo = React.forwardRef<SVGSVGElement, XOctagonLogoProps>(
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
      <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
    </svg>
  )
);

XOctagonLogo.displayName = "XOctagonLogo";

export const XOctagonLogoMetadata = {
  id: "x-octagon",
  baseId: "x-octagon",
  variant: "default",
  name: "X Octagon",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default XOctagonLogo;
