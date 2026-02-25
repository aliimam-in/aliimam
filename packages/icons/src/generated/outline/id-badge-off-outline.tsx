/**
 * Auto-generated logo component: Id Badge Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface IdBadgeOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const IdBadgeOffOutlineLogo = React.forwardRef<SVGSVGElement, IdBadgeOffOutlineLogoProps>(
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
      <path d="M7.141 3.125a3 3 0 0 1 .859 -.125h8a3 3 0 0 1 3 3v9m-.13 3.874a3 3 0 0 1 -2.87 2.126h-8a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 .128 -.869" />
  <path d="M11.179 11.176a2 2 0 1 0 2.635 2.667" />
  <path d="M10 6h4" />
  <path d="M9 18h6" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

IdBadgeOffOutlineLogo.displayName = "IdBadgeOffOutlineLogo";

export const IdBadgeOffOutlineLogoMetadata = {
  id: "id-badge-off-outline",
  baseId: "id-badge-off-outline",
  variant: "default",
  name: "Id Badge Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default IdBadgeOffOutlineLogo;
