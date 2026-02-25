/**
 * Auto-generated logo component: Radius Bottom Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RadiusBottomLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RadiusBottomLeftOutlineLogo = React.forwardRef<SVGSVGElement, RadiusBottomLeftOutlineLogoProps>(
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
      <path d="M19 19h-6a8 8 0 0 1 -8 -8v-6" />
    </svg>
  )
);

RadiusBottomLeftOutlineLogo.displayName = "RadiusBottomLeftOutlineLogo";

export const RadiusBottomLeftOutlineLogoMetadata = {
  id: "radius-bottom-left-outline",
  baseId: "radius-bottom-left-outline",
  variant: "default",
  name: "Radius Bottom Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RadiusBottomLeftOutlineLogo;
