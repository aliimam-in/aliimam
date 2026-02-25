/**
 * Auto-generated logo component: Typography Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TypographyOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TypographyOffOutlineLogo = React.forwardRef<SVGSVGElement, TypographyOffOutlineLogoProps>(
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
      <path d="M4 20h3" />
  <path d="M14 20h6" />
  <path d="M6.9 15h6.9" />
  <path d="M13 13l3 7" />
  <path d="M5 20l4.09 -10.906" />
  <path d="M10.181 6.183l.819 -2.183h2l3.904 8.924" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

TypographyOffOutlineLogo.displayName = "TypographyOffOutlineLogo";

export const TypographyOffOutlineLogoMetadata = {
  id: "typography-off-outline",
  baseId: "typography-off-outline",
  variant: "default",
  name: "Typography Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TypographyOffOutlineLogo;
