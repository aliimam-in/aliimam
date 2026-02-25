/**
 * Auto-generated logo component: Bell School Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BellSchoolOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BellSchoolOutlineLogo = React.forwardRef<SVGSVGElement, BellSchoolOutlineLogoProps>(
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
      <path d="M4 10a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
  <path d="M13.5 15h.5a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-1a2 2 0 0 1 2 -2h.5" />
  <path d="M16 17a5.698 5.698 0 0 0 4.467 -7.932l-.467 -1.068" />
  <path d="M10 10v.01" />
  <path d="M19 8a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  )
);

BellSchoolOutlineLogo.displayName = "BellSchoolOutlineLogo";

export const BellSchoolOutlineLogoMetadata = {
  id: "bell-school-outline",
  baseId: "bell-school-outline",
  variant: "default",
  name: "Bell School Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BellSchoolOutlineLogo;
