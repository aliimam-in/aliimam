/**
 * Auto-generated logo component: X Line Top (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface XLineTopLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const XLineTopLogo = React.forwardRef<SVGSVGElement, XLineTopLogoProps>(
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
      <path d="M18 4H6" />
  <path d="M18 8 6 20" />
  <path d="m6 8 12 12" />
    </svg>
  )
);

XLineTopLogo.displayName = "XLineTopLogo";

export const XLineTopLogoMetadata = {
  id: "x-line-top",
  baseId: "x-line-top",
  variant: "default",
  name: "X Line Top",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default XLineTopLogo;
