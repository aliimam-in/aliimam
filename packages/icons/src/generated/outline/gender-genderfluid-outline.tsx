/**
 * Auto-generated logo component: Gender Genderfluid Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GenderGenderfluidOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GenderGenderfluidOutlineLogo = React.forwardRef<SVGSVGElement, GenderGenderfluidOutlineLogoProps>(
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
      <path d="M10 15.464a4 4 0 1 0 4 -6.928a4 4 0 0 0 -4 6.928" />
  <path d="M15.464 14l3 -5.196" />
  <path d="M5.536 15.195l3 -5.196" />
  <path d="M12 12h.01" />
  <path d="M9 9l-6 -6" />
  <path d="M5.5 8.5l3 -3" />
  <path d="M21 21l-6 -6" />
  <path d="M17 20l3 -3" />
  <path d="M3 7v-4h4" />
    </svg>
  )
);

GenderGenderfluidOutlineLogo.displayName = "GenderGenderfluidOutlineLogo";

export const GenderGenderfluidOutlineLogoMetadata = {
  id: "gender-genderfluid-outline",
  baseId: "gender-genderfluid-outline",
  variant: "default",
  name: "Gender Genderfluid Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GenderGenderfluidOutlineLogo;
