/**
 * Auto-generated logo component: Inner Shadow Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface InnerShadowRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const InnerShadowRightOutlineLogo = React.forwardRef<SVGSVGElement, InnerShadowRightOutlineLogoProps>(
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
      <path d="M18.364 18.364a9 9 0 1 1 -12.728 -12.728a9 9 0 0 1 12.728 12.728" />
  <path d="M16.243 7.757a6 6 0 0 1 0 8.486" />
    </svg>
  )
);

InnerShadowRightOutlineLogo.displayName = "InnerShadowRightOutlineLogo";

export const InnerShadowRightOutlineLogoMetadata = {
  id: "inner-shadow-right-outline",
  baseId: "inner-shadow-right-outline",
  variant: "default",
  name: "Inner Shadow Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default InnerShadowRightOutlineLogo;
