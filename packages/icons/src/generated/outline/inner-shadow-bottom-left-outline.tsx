/**
 * Auto-generated logo component: Inner Shadow Bottom Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface InnerShadowBottomLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const InnerShadowBottomLeftOutlineLogo = React.forwardRef<SVGSVGElement, InnerShadowBottomLeftOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M6 12a6 6 0 0 0 6 6" />
    </svg>
  )
);

InnerShadowBottomLeftOutlineLogo.displayName = "InnerShadowBottomLeftOutlineLogo";

export const InnerShadowBottomLeftOutlineLogoMetadata = {
  id: "inner-shadow-bottom-left-outline",
  baseId: "inner-shadow-bottom-left-outline",
  variant: "default",
  name: "Inner Shadow Bottom Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default InnerShadowBottomLeftOutlineLogo;
