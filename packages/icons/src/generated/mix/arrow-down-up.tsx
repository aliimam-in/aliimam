/**
 * Auto-generated logo component: Arrow Down Up (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowDownUpLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowDownUpLogo = React.forwardRef<SVGSVGElement, ArrowDownUpLogoProps>(
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
  <path d="M7 20V4" />
  <path d="m21 8-4-4-4 4" />
  <path d="M17 4v16" />
    </svg>
  )
);

ArrowDownUpLogo.displayName = "ArrowDownUpLogo";

export const ArrowDownUpLogoMetadata = {
  id: "arrow-down-up",
  baseId: "arrow-down-up",
  variant: "default",
  name: "Arrow Down Up",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowDownUpLogo;
