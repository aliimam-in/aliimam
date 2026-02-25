/**
 * Auto-generated logo component: Arrow Down Left (default)
 * Category: arrows
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowDownLeftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowDownLeftLogo = React.forwardRef<SVGSVGElement, ArrowDownLeftLogoProps>(
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
      <path d="M17 7 7 17" />
  <path d="M17 17H7V7" />
    </svg>
  )
);

ArrowDownLeftLogo.displayName = "ArrowDownLeftLogo";

export const ArrowDownLeftLogoMetadata = {
  id: "arrow-down-left",
  baseId: "arrow-down-left",
  variant: "default",
  name: "Arrow Down Left",
  category: "arrows",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowDownLeftLogo;
