/**
 * Auto-generated logo component: Radius Top Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RadiusTopRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RadiusTopRightOutlineLogo = React.forwardRef<SVGSVGElement, RadiusTopRightOutlineLogoProps>(
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
      <path d="M5 5h6a8 8 0 0 1 8 8v6" />
    </svg>
  )
);

RadiusTopRightOutlineLogo.displayName = "RadiusTopRightOutlineLogo";

export const RadiusTopRightOutlineLogoMetadata = {
  id: "radius-top-right-outline",
  baseId: "radius-top-right-outline",
  variant: "default",
  name: "Radius Top Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RadiusTopRightOutlineLogo;
