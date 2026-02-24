/**
 * Auto-generated logo component: X (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface XLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const XLogo = React.forwardRef<SVGSVGElement, XLogoProps>(
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
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
);

XLogo.displayName = "XLogo";

export const XLogoMetadata = {
  id: "x",
  baseId: "x",
  variant: "default",
  name: "X",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default XLogo;
