/**
 * Auto-generated logo component: Arrow Up Circle (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowUpCircleLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowUpCircleLogo = React.forwardRef<SVGSVGElement, ArrowUpCircleLogoProps>(
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
      <circle cx="12" cy="12" r="10"/><polyline points="16 12 12 8 8 12"/><line x1="12" y1="16" x2="12" y2="8"/>
    </svg>
  )
);

ArrowUpCircleLogo.displayName = "ArrowUpCircleLogo";

export const ArrowUpCircleLogoMetadata = {
  id: "arrow-up-circle",
  baseId: "arrow-up-circle",
  variant: "default",
  name: "Arrow Up Circle",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowUpCircleLogo;
