/**
 * Auto-generated logo component: X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface XOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const XOutlineLogo = React.forwardRef<SVGSVGElement, XOutlineLogoProps>(
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
      <path d="M18 6l-12 12" />
  <path d="M6 6l12 12" />
    </svg>
  )
);

XOutlineLogo.displayName = "XOutlineLogo";

export const XOutlineLogoMetadata = {
  id: "x-outline",
  baseId: "x-outline",
  variant: "default",
  name: "X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default XOutlineLogo;
