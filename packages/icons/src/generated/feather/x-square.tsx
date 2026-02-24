/**
 * Auto-generated logo component: X Square (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface XSquareLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const XSquareLogo = React.forwardRef<SVGSVGElement, XSquareLogoProps>(
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
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/>
    </svg>
  )
);

XSquareLogo.displayName = "XSquareLogo";

export const XSquareLogoMetadata = {
  id: "x-square",
  baseId: "x-square",
  variant: "default",
  name: "X Square",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default XSquareLogo;
