/**
 * Auto-generated logo component: Ribbon Health Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RibbonHealthOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RibbonHealthOutlineLogo = React.forwardRef<SVGSVGElement, RibbonHealthOutlineLogoProps>(
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
      <path d="M7 21s9.286 -9.841 9.286 -13.841a3.864 3.864 0 0 0 -1.182 -3.008a4.13 4.13 0 0 0 -3.104 -1.144a4.13 4.13 0 0 0 -3.104 1.143a3.864 3.864 0 0 0 -1.182 3.01c0 4 9.286 13.84 9.286 13.84" />
    </svg>
  )
);

RibbonHealthOutlineLogo.displayName = "RibbonHealthOutlineLogo";

export const RibbonHealthOutlineLogoMetadata = {
  id: "ribbon-health-outline",
  baseId: "ribbon-health-outline",
  variant: "default",
  name: "Ribbon Health Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RibbonHealthOutlineLogo;
