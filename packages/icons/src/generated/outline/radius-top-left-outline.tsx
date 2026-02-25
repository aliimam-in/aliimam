/**
 * Auto-generated logo component: Radius Top Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RadiusTopLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RadiusTopLeftOutlineLogo = React.forwardRef<SVGSVGElement, RadiusTopLeftOutlineLogoProps>(
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
      <path d="M5 19v-6a8 8 0 0 1 8 -8h6" />
    </svg>
  )
);

RadiusTopLeftOutlineLogo.displayName = "RadiusTopLeftOutlineLogo";

export const RadiusTopLeftOutlineLogoMetadata = {
  id: "radius-top-left-outline",
  baseId: "radius-top-left-outline",
  variant: "default",
  name: "Radius Top Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RadiusTopLeftOutlineLogo;
