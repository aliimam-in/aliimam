/**
 * Auto-generated logo component: Inner Shadow Bottom Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface InnerShadowBottomOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const InnerShadowBottomOutlineLogo = React.forwardRef<SVGSVGElement, InnerShadowBottomOutlineLogoProps>(
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
      <path d="M18.364 18.364a9 9 0 1 0 -12.728 -12.728a9 9 0 0 0 12.728 12.728" />
  <path d="M7.757 16.243a6 6 0 0 0 8.486 0" />
    </svg>
  )
);

InnerShadowBottomOutlineLogo.displayName = "InnerShadowBottomOutlineLogo";

export const InnerShadowBottomOutlineLogoMetadata = {
  id: "inner-shadow-bottom-outline",
  baseId: "inner-shadow-bottom-outline",
  variant: "default",
  name: "Inner Shadow Bottom Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default InnerShadowBottomOutlineLogo;
