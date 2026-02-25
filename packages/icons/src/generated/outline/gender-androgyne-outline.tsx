/**
 * Auto-generated logo component: Gender Androgyne Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GenderAndrogyneOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GenderAndrogyneOutlineLogo = React.forwardRef<SVGSVGElement, GenderAndrogyneOutlineLogoProps>(
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
      <path d="M13 11l6 -6" />
  <path d="M4 15a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
  <path d="M19 9v-4h-4" />
  <path d="M16.5 10.5l-3 -3" />
    </svg>
  )
);

GenderAndrogyneOutlineLogo.displayName = "GenderAndrogyneOutlineLogo";

export const GenderAndrogyneOutlineLogoMetadata = {
  id: "gender-androgyne-outline",
  baseId: "gender-androgyne-outline",
  variant: "default",
  name: "Gender Androgyne Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GenderAndrogyneOutlineLogo;
