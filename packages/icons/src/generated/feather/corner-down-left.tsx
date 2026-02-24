/**
 * Auto-generated logo component: Corner Down Left (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CornerDownLeftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CornerDownLeftLogo = React.forwardRef<SVGSVGElement, CornerDownLeftLogoProps>(
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
      <polyline points="9 10 4 15 9 20"/><path d="M20 4v7a4 4 0 0 1-4 4H4"/>
    </svg>
  )
);

CornerDownLeftLogo.displayName = "CornerDownLeftLogo";

export const CornerDownLeftLogoMetadata = {
  id: "corner-down-left",
  baseId: "corner-down-left",
  variant: "default",
  name: "Corner Down Left",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CornerDownLeftLogo;
