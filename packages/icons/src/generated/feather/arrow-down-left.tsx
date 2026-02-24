/**
 * Auto-generated logo component: Arrow Down Left (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowDownLeftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowDownLeftLogo = React.forwardRef<SVGSVGElement, ArrowDownLeftLogoProps>(
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
      <line x1="17" y1="7" x2="7" y2="17"/><polyline points="17 17 7 17 7 7"/>
    </svg>
  )
);

ArrowDownLeftLogo.displayName = "ArrowDownLeftLogo";

export const ArrowDownLeftLogoMetadata = {
  id: "arrow-down-left",
  baseId: "arrow-down-left",
  variant: "default",
  name: "Arrow Down Left",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowDownLeftLogo;
