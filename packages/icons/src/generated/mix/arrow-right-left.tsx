/**
 * Auto-generated logo component: Arrow Right Left (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowRightLeftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowRightLeftLogo = React.forwardRef<SVGSVGElement, ArrowRightLeftLogoProps>(
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
      <path d="m16 3 4 4-4 4" />
  <path d="M20 7H4" />
  <path d="m8 21-4-4 4-4" />
  <path d="M4 17h16" />
    </svg>
  )
);

ArrowRightLeftLogo.displayName = "ArrowRightLeftLogo";

export const ArrowRightLeftLogoMetadata = {
  id: "arrow-right-left",
  baseId: "arrow-right-left",
  variant: "default",
  name: "Arrow Right Left",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowRightLeftLogo;
