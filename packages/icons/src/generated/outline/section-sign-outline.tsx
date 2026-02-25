/**
 * Auto-generated logo component: Section Sign Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SectionSignOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SectionSignOutlineLogo = React.forwardRef<SVGSVGElement, SectionSignOutlineLogoProps>(
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
      <path d="M9.172 19a3 3 0 1 0 2.828 -4" />
  <path d="M14.83 5a3 3 0 1 0 -2.83 4" />
  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    </svg>
  )
);

SectionSignOutlineLogo.displayName = "SectionSignOutlineLogo";

export const SectionSignOutlineLogoMetadata = {
  id: "section-sign-outline",
  baseId: "section-sign-outline",
  variant: "default",
  name: "Section Sign Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SectionSignOutlineLogo;
