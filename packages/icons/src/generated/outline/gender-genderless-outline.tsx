/**
 * Auto-generated logo component: Gender Genderless Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GenderGenderlessOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GenderGenderlessOutlineLogo = React.forwardRef<SVGSVGElement, GenderGenderlessOutlineLogoProps>(
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
      <path d="M12 10a5 5 0 1 1 0 10a5 5 0 0 1 0 -10" />
  <path d="M12 10v-7" />
  <path d="M7 15h10" />
    </svg>
  )
);

GenderGenderlessOutlineLogo.displayName = "GenderGenderlessOutlineLogo";

export const GenderGenderlessOutlineLogoMetadata = {
  id: "gender-genderless-outline",
  baseId: "gender-genderless-outline",
  variant: "default",
  name: "Gender Genderless Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GenderGenderlessOutlineLogo;
