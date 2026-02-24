/**
 * Auto-generated logo component: Arrow Up Right (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowUpRightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowUpRightLogo = React.forwardRef<SVGSVGElement, ArrowUpRightLogoProps>(
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
      <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
    </svg>
  )
);

ArrowUpRightLogo.displayName = "ArrowUpRightLogo";

export const ArrowUpRightLogoMetadata = {
  id: "arrow-up-right",
  baseId: "arrow-up-right",
  variant: "default",
  name: "Arrow Up Right",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowUpRightLogo;
