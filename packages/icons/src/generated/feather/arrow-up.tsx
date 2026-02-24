/**
 * Auto-generated logo component: Arrow Up (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowUpLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowUpLogo = React.forwardRef<SVGSVGElement, ArrowUpLogoProps>(
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
      <line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>
    </svg>
  )
);

ArrowUpLogo.displayName = "ArrowUpLogo";

export const ArrowUpLogoMetadata = {
  id: "arrow-up",
  baseId: "arrow-up",
  variant: "default",
  name: "Arrow Up",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowUpLogo;
