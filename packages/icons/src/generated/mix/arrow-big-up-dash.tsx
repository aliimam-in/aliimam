/**
 * Auto-generated logo component: Arrow Big Up Dash (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBigUpDashLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBigUpDashLogo = React.forwardRef<SVGSVGElement, ArrowBigUpDashLogoProps>(
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
      <path d="M9 13a1 1 0 0 0-1-1H5.061a1 1 0 0 1-.75-1.811l6.836-6.835a1.207 1.207 0 0 1 1.707 0l6.835 6.835a1 1 0 0 1-.75 1.811H16a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z" />
  <path d="M9 20h6" />
    </svg>
  )
);

ArrowBigUpDashLogo.displayName = "ArrowBigUpDashLogo";

export const ArrowBigUpDashLogoMetadata = {
  id: "arrow-big-up-dash",
  baseId: "arrow-big-up-dash",
  variant: "default",
  name: "Arrow Big Up Dash",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBigUpDashLogo;
