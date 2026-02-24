/**
 * Auto-generated logo component: Check Line (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CheckLineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CheckLineLogo = React.forwardRef<SVGSVGElement, CheckLineLogoProps>(
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
      <path d="M20 4L9 15" />
  <path d="M21 19L3 19" />
  <path d="M9 15L4 10" />
    </svg>
  )
);

CheckLineLogo.displayName = "CheckLineLogo";

export const CheckLineLogoMetadata = {
  id: "check-line",
  baseId: "check-line",
  variant: "default",
  name: "Check Line",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CheckLineLogo;
