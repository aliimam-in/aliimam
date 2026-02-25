/**
 * Auto-generated logo component: Gender Femme Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GenderFemmeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GenderFemmeOutlineLogo = React.forwardRef<SVGSVGElement, GenderFemmeOutlineLogoProps>(
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
      <path d="M7 9a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
  <path d="M12 14v7" />
  <path d="M7 18h10" />
    </svg>
  )
);

GenderFemmeOutlineLogo.displayName = "GenderFemmeOutlineLogo";

export const GenderFemmeOutlineLogoMetadata = {
  id: "gender-femme-outline",
  baseId: "gender-femme-outline",
  variant: "default",
  name: "Gender Femme Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GenderFemmeOutlineLogo;
