/**
 * Auto-generated logo component: Gender Female Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GenderFemaleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GenderFemaleOutlineLogo = React.forwardRef<SVGSVGElement, GenderFemaleOutlineLogoProps>(
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
  <path d="M9 18h6" />
    </svg>
  )
);

GenderFemaleOutlineLogo.displayName = "GenderFemaleOutlineLogo";

export const GenderFemaleOutlineLogoMetadata = {
  id: "gender-female-outline",
  baseId: "gender-female-outline",
  variant: "default",
  name: "Gender Female Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GenderFemaleOutlineLogo;
