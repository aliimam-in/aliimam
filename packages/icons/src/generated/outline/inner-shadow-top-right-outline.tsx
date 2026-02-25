/**
 * Auto-generated logo component: Inner Shadow Top Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface InnerShadowTopRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const InnerShadowTopRightOutlineLogo = React.forwardRef<SVGSVGElement, InnerShadowTopRightOutlineLogoProps>(
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
      <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
  <path d="M18 12a6 6 0 0 0 -6 -6" />
    </svg>
  )
);

InnerShadowTopRightOutlineLogo.displayName = "InnerShadowTopRightOutlineLogo";

export const InnerShadowTopRightOutlineLogoMetadata = {
  id: "inner-shadow-top-right-outline",
  baseId: "inner-shadow-top-right-outline",
  variant: "default",
  name: "Inner Shadow Top Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default InnerShadowTopRightOutlineLogo;
