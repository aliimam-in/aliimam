/**
 * Auto-generated logo component: Typography Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TypographyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TypographyOutlineLogo = React.forwardRef<SVGSVGElement, TypographyOutlineLogoProps>(
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
      <path d="M4 20l3 0" />
  <path d="M14 20l7 0" />
  <path d="M6.9 15l6.9 0" />
  <path d="M10.2 6.3l5.8 13.7" />
  <path d="M5 20l6 -16l2 0l7 16" />
    </svg>
  )
);

TypographyOutlineLogo.displayName = "TypographyOutlineLogo";

export const TypographyOutlineLogoMetadata = {
  id: "typography-outline",
  baseId: "typography-outline",
  variant: "default",
  name: "Typography Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TypographyOutlineLogo;
