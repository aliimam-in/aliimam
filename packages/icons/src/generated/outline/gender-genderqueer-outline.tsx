/**
 * Auto-generated logo component: Gender Genderqueer Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GenderGenderqueerOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GenderGenderqueerOutlineLogo = React.forwardRef<SVGSVGElement, GenderGenderqueerOutlineLogoProps>(
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
      <path d="M12 11a5 5 0 1 1 0 10a5 5 0 0 1 0 -10" />
  <path d="M12 11v-8" />
  <path d="M14.5 4.5l-5 3" />
  <path d="M9.5 4.5l5 3" />
    </svg>
  )
);

GenderGenderqueerOutlineLogo.displayName = "GenderGenderqueerOutlineLogo";

export const GenderGenderqueerOutlineLogoMetadata = {
  id: "gender-genderqueer-outline",
  baseId: "gender-genderqueer-outline",
  variant: "default",
  name: "Gender Genderqueer Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GenderGenderqueerOutlineLogo;
