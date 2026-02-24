/**
 * Auto-generated logo component: Arrow Big Left Dash (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBigLeftDashLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBigLeftDashLogo = React.forwardRef<SVGSVGElement, ArrowBigLeftDashLogoProps>(
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
      <path d="M13 9a1 1 0 0 1-1-1V5.061a1 1 0 0 0-1.811-.75l-6.835 6.836a1.207 1.207 0 0 0 0 1.707l6.835 6.835a1 1 0 0 0 1.811-.75V16a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z" />
  <path d="M20 9v6" />
    </svg>
  )
);

ArrowBigLeftDashLogo.displayName = "ArrowBigLeftDashLogo";

export const ArrowBigLeftDashLogoMetadata = {
  id: "arrow-big-left-dash",
  baseId: "arrow-big-left-dash",
  variant: "default",
  name: "Arrow Big Left Dash",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBigLeftDashLogo;
