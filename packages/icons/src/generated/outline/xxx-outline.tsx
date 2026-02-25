/**
 * Auto-generated logo component: Xxx Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface XxxOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const XxxOutlineLogo = React.forwardRef<SVGSVGElement, XxxOutlineLogoProps>(
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
      <path d="M10 8l4 8" />
  <path d="M10 16l4 -8" />
  <path d="M17 8l4 8" />
  <path d="M17 16l4 -8" />
  <path d="M3 8l4 8" />
  <path d="M3 16l4 -8" />
    </svg>
  )
);

XxxOutlineLogo.displayName = "XxxOutlineLogo";

export const XxxOutlineLogoMetadata = {
  id: "xxx-outline",
  baseId: "xxx-outline",
  variant: "default",
  name: "Xxx Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default XxxOutlineLogo;
