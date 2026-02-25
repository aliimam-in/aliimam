/**
 * Auto-generated logo component: Inner Shadow Top Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface InnerShadowTopOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const InnerShadowTopOutlineLogo = React.forwardRef<SVGSVGElement, InnerShadowTopOutlineLogoProps>(
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
      <path d="M5.636 5.636a9 9 0 1 0 12.728 12.728a9 9 0 0 0 -12.728 -12.728" />
  <path d="M16.243 7.757a6 6 0 0 0 -8.486 0" />
    </svg>
  )
);

InnerShadowTopOutlineLogo.displayName = "InnerShadowTopOutlineLogo";

export const InnerShadowTopOutlineLogoMetadata = {
  id: "inner-shadow-top-outline",
  baseId: "inner-shadow-top-outline",
  variant: "default",
  name: "Inner Shadow Top Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default InnerShadowTopOutlineLogo;
