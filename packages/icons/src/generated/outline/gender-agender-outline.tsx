/**
 * Auto-generated logo component: Gender Agender Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GenderAgenderOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GenderAgenderOutlineLogo = React.forwardRef<SVGSVGElement, GenderAgenderOutlineLogoProps>(
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
      <path d="M6 12a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
  <path d="M7 12h11" />
    </svg>
  )
);

GenderAgenderOutlineLogo.displayName = "GenderAgenderOutlineLogo";

export const GenderAgenderOutlineLogoMetadata = {
  id: "gender-agender-outline",
  baseId: "gender-agender-outline",
  variant: "default",
  name: "Gender Agender Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GenderAgenderOutlineLogo;
