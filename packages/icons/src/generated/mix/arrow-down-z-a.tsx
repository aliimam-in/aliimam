/**
 * Auto-generated logo component: Arrow Down Z A (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowDownZALogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowDownZALogo = React.forwardRef<SVGSVGElement, ArrowDownZALogoProps>(
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
      <path d="m3 16 4 4 4-4" />
  <path d="M7 4v16" />
  <path d="M15 4h5l-5 6h5" />
  <path d="M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" />
  <path d="M20 18h-5" />
    </svg>
  )
);

ArrowDownZALogo.displayName = "ArrowDownZALogo";

export const ArrowDownZALogoMetadata = {
  id: "arrow-down-z-a",
  baseId: "arrow-down-z-a",
  variant: "default",
  name: "Arrow Down Z A",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowDownZALogo;
