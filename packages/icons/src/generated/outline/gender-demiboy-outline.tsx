/**
 * Auto-generated logo component: Gender Demiboy Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GenderDemiboyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GenderDemiboyOutlineLogo = React.forwardRef<SVGSVGElement, GenderDemiboyOutlineLogoProps>(
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
      <path d="M5 14a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
  <path d="M19 5l-5.4 5.4" />
  <path d="M19 5h-5" />
    </svg>
  )
);

GenderDemiboyOutlineLogo.displayName = "GenderDemiboyOutlineLogo";

export const GenderDemiboyOutlineLogoMetadata = {
  id: "gender-demiboy-outline",
  baseId: "gender-demiboy-outline",
  variant: "default",
  name: "Gender Demiboy Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GenderDemiboyOutlineLogo;
