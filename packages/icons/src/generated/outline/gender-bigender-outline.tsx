/**
 * Auto-generated logo component: Gender Bigender Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GenderBigenderOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GenderBigenderOutlineLogo = React.forwardRef<SVGSVGElement, GenderBigenderOutlineLogoProps>(
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
      <path d="M7 11a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path d="M19 3l-5 5" />
  <path d="M15 3h4v4" />
  <path d="M11 16v6" />
  <path d="M8 19h6" />
    </svg>
  )
);

GenderBigenderOutlineLogo.displayName = "GenderBigenderOutlineLogo";

export const GenderBigenderOutlineLogoMetadata = {
  id: "gender-bigender-outline",
  baseId: "gender-bigender-outline",
  variant: "default",
  name: "Gender Bigender Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GenderBigenderOutlineLogo;
