/**
 * Auto-generated logo component: Inner Shadow Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface InnerShadowLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const InnerShadowLeftOutlineLogo = React.forwardRef<SVGSVGElement, InnerShadowLeftOutlineLogoProps>(
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
      <path d="M5.636 5.636a9 9 0 1 1 12.728 12.728a9 9 0 0 1 -12.728 -12.728" />
  <path d="M7.757 16.243a6 6 0 0 1 0 -8.486" />
    </svg>
  )
);

InnerShadowLeftOutlineLogo.displayName = "InnerShadowLeftOutlineLogo";

export const InnerShadowLeftOutlineLogoMetadata = {
  id: "inner-shadow-left-outline",
  baseId: "inner-shadow-left-outline",
  variant: "default",
  name: "Inner Shadow Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default InnerShadowLeftOutlineLogo;
