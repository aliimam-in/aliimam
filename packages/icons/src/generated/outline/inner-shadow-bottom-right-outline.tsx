/**
 * Auto-generated logo component: Inner Shadow Bottom Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface InnerShadowBottomRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const InnerShadowBottomRightOutlineLogo = React.forwardRef<SVGSVGElement, InnerShadowBottomRightOutlineLogoProps>(
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
      <path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18" />
  <path d="M18 12a6 6 0 0 1 -6 6" />
    </svg>
  )
);

InnerShadowBottomRightOutlineLogo.displayName = "InnerShadowBottomRightOutlineLogo";

export const InnerShadowBottomRightOutlineLogoMetadata = {
  id: "inner-shadow-bottom-right-outline",
  baseId: "inner-shadow-bottom-right-outline",
  variant: "default",
  name: "Inner Shadow Bottom Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default InnerShadowBottomRightOutlineLogo;
