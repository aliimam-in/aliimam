/**
 * Auto-generated logo component: Gender Transgender Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GenderTransgenderOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GenderTransgenderOutlineLogo = React.forwardRef<SVGSVGElement, GenderTransgenderOutlineLogoProps>(
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
      <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path d="M15 9l6 -6" />
  <path d="M21 7v-4h-4" />
  <path d="M9 9l-6 -6" />
  <path d="M3 7v-4h4" />
  <path d="M5.5 8.5l3 -3" />
  <path d="M12 16v5" />
  <path d="M9.5 19h5" />
    </svg>
  )
);

GenderTransgenderOutlineLogo.displayName = "GenderTransgenderOutlineLogo";

export const GenderTransgenderOutlineLogoMetadata = {
  id: "gender-transgender-outline",
  baseId: "gender-transgender-outline",
  variant: "default",
  name: "Gender Transgender Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GenderTransgenderOutlineLogo;
