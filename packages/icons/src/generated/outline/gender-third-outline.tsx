/**
 * Auto-generated logo component: Gender Third Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GenderThirdOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GenderThirdOutlineLogo = React.forwardRef<SVGSVGElement, GenderThirdOutlineLogoProps>(
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
      <path d="M11 12a5 5 0 1 0 10 0a5 5 0 0 0 -10 0" />
  <path d="M11 12h-3" />
  <path d="M8 12l-5 -4v8l5 -4" />
    </svg>
  )
);

GenderThirdOutlineLogo.displayName = "GenderThirdOutlineLogo";

export const GenderThirdOutlineLogoMetadata = {
  id: "gender-third-outline",
  baseId: "gender-third-outline",
  variant: "default",
  name: "Gender Third Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GenderThirdOutlineLogo;
