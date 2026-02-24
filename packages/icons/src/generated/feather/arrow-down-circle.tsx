/**
 * Auto-generated logo component: Arrow Down Circle (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowDownCircleLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowDownCircleLogo = React.forwardRef<SVGSVGElement, ArrowDownCircleLogoProps>(
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
      <circle cx="12" cy="12" r="10"/><polyline points="8 12 12 16 16 12"/><line x1="12" y1="8" x2="12" y2="16"/>
    </svg>
  )
);

ArrowDownCircleLogo.displayName = "ArrowDownCircleLogo";

export const ArrowDownCircleLogoMetadata = {
  id: "arrow-down-circle",
  baseId: "arrow-down-circle",
  variant: "default",
  name: "Arrow Down Circle",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowDownCircleLogo;
