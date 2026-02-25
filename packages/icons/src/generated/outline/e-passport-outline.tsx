/**
 * Auto-generated logo component: E Passport Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EPassportOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EPassportOutlineLogo = React.forwardRef<SVGSVGElement, EPassportOutlineLogoProps>(
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
      <path d="M2 7a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2l0 -10" />
  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M9 12h-7" />
  <path d="M15 12h7" />
    </svg>
  )
);

EPassportOutlineLogo.displayName = "EPassportOutlineLogo";

export const EPassportOutlineLogoMetadata = {
  id: "e-passport-outline",
  baseId: "e-passport-outline",
  variant: "default",
  name: "E Passport Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EPassportOutlineLogo;
