/**
 * Auto-generated logo component: Gender Intergender Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GenderIntergenderOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GenderIntergenderOutlineLogo = React.forwardRef<SVGSVGElement, GenderIntergenderOutlineLogoProps>(
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
      <path d="M13.5 11.5l6.5 6.5v-4" />
  <path d="M11.5 13.5l6.5 6.5" />
  <path d="M9 4a5 5 0 1 1 0 10a5 5 0 0 1 0 -10" />
  <path d="M14 20l2 -2" />
    </svg>
  )
);

GenderIntergenderOutlineLogo.displayName = "GenderIntergenderOutlineLogo";

export const GenderIntergenderOutlineLogoMetadata = {
  id: "gender-intergender-outline",
  baseId: "gender-intergender-outline",
  variant: "default",
  name: "Gender Intergender Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GenderIntergenderOutlineLogo;
