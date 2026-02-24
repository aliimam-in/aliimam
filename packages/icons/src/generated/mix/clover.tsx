/**
 * Auto-generated logo component: Clover (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CloverLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CloverLogo = React.forwardRef<SVGSVGElement, CloverLogoProps>(
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
      <path d="M16.17 7.83 2 22" />
  <path d="M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12" />
  <path d="m7.83 7.83 8.34 8.34" />
    </svg>
  )
);

CloverLogo.displayName = "CloverLogo";

export const CloverLogoMetadata = {
  id: "clover",
  baseId: "clover",
  variant: "default",
  name: "Clover",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CloverLogo;
