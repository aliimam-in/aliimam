/**
 * Auto-generated logo component: Gender Trasvesti Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GenderTrasvestiOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GenderTrasvestiOutlineLogo = React.forwardRef<SVGSVGElement, GenderTrasvestiOutlineLogoProps>(
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
      <path d="M15 20a5 5 0 1 1 0 -10a5 5 0 0 1 0 10" />
  <path d="M6 6l5.4 5.4" />
  <path d="M4 8l4 -4" />
    </svg>
  )
);

GenderTrasvestiOutlineLogo.displayName = "GenderTrasvestiOutlineLogo";

export const GenderTrasvestiOutlineLogoMetadata = {
  id: "gender-trasvesti-outline",
  baseId: "gender-trasvesti-outline",
  variant: "default",
  name: "Gender Trasvesti Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GenderTrasvestiOutlineLogo;
