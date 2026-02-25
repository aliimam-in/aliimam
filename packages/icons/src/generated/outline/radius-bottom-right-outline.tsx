/**
 * Auto-generated logo component: Radius Bottom Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RadiusBottomRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RadiusBottomRightOutlineLogo = React.forwardRef<SVGSVGElement, RadiusBottomRightOutlineLogoProps>(
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
      <path d="M19 5v6a8 8 0 0 1 -8 8h-6" />
    </svg>
  )
);

RadiusBottomRightOutlineLogo.displayName = "RadiusBottomRightOutlineLogo";

export const RadiusBottomRightOutlineLogoMetadata = {
  id: "radius-bottom-right-outline",
  baseId: "radius-bottom-right-outline",
  variant: "default",
  name: "Radius Bottom Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RadiusBottomRightOutlineLogo;
