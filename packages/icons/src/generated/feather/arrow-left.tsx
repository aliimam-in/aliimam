/**
 * Auto-generated logo component: Arrow Left (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowLeftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowLeftLogo = React.forwardRef<SVGSVGElement, ArrowLeftLogoProps>(
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
      <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
    </svg>
  )
);

ArrowLeftLogo.displayName = "ArrowLeftLogo";

export const ArrowLeftLogoMetadata = {
  id: "arrow-left",
  baseId: "arrow-left",
  variant: "default",
  name: "Arrow Left",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowLeftLogo;
