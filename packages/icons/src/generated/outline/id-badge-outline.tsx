/**
 * Auto-generated logo component: Id Badge Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface IdBadgeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const IdBadgeOutlineLogo = React.forwardRef<SVGSVGElement, IdBadgeOutlineLogoProps>(
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
      <path d="M5 6a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3l0 -12" />
  <path d="M10 13a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M10 6h4" />
  <path d="M9 18h6" />
    </svg>
  )
);

IdBadgeOutlineLogo.displayName = "IdBadgeOutlineLogo";

export const IdBadgeOutlineLogoMetadata = {
  id: "id-badge-outline",
  baseId: "id-badge-outline",
  variant: "default",
  name: "Id Badge Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default IdBadgeOutlineLogo;
