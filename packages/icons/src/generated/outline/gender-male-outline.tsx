/**
 * Auto-generated logo component: Gender Male Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GenderMaleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GenderMaleOutlineLogo = React.forwardRef<SVGSVGElement, GenderMaleOutlineLogoProps>(
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
  <path d="M19 5v5" />
    </svg>
  )
);

GenderMaleOutlineLogo.displayName = "GenderMaleOutlineLogo";

export const GenderMaleOutlineLogoMetadata = {
  id: "gender-male-outline",
  baseId: "gender-male-outline",
  variant: "default",
  name: "Gender Male Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GenderMaleOutlineLogo;
