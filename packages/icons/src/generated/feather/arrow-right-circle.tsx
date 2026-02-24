/**
 * Auto-generated logo component: Arrow Right Circle (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowRightCircleLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowRightCircleLogo = React.forwardRef<SVGSVGElement, ArrowRightCircleLogoProps>(
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
      <circle cx="12" cy="12" r="10"/><polyline points="12 16 16 12 12 8"/><line x1="8" y1="12" x2="16" y2="12"/>
    </svg>
  )
);

ArrowRightCircleLogo.displayName = "ArrowRightCircleLogo";

export const ArrowRightCircleLogoMetadata = {
  id: "arrow-right-circle",
  baseId: "arrow-right-circle",
  variant: "default",
  name: "Arrow Right Circle",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowRightCircleLogo;
