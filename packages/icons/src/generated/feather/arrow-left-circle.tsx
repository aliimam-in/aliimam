/**
 * Auto-generated logo component: Arrow Left Circle (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowLeftCircleLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowLeftCircleLogo = React.forwardRef<SVGSVGElement, ArrowLeftCircleLogoProps>(
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
      <circle cx="12" cy="12" r="10"/><polyline points="12 8 8 12 12 16"/><line x1="16" y1="12" x2="8" y2="12"/>
    </svg>
  )
);

ArrowLeftCircleLogo.displayName = "ArrowLeftCircleLogo";

export const ArrowLeftCircleLogoMetadata = {
  id: "arrow-left-circle",
  baseId: "arrow-left-circle",
  variant: "default",
  name: "Arrow Left Circle",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowLeftCircleLogo;
