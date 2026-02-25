/**
 * Auto-generated logo component: Home Cancel Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HomeCancelOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HomeCancelOutlineLogo = React.forwardRef<SVGSVGElement, HomeCancelOutlineLogoProps>(
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
      <path d="M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M17 21l4 -4" />
  <path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" />
  <path d="M9 21v-6a2 2 0 0 1 2 -2h2c.58 0 1.103 .247 1.468 .642" />
    </svg>
  )
);

HomeCancelOutlineLogo.displayName = "HomeCancelOutlineLogo";

export const HomeCancelOutlineLogoMetadata = {
  id: "home-cancel-outline",
  baseId: "home-cancel-outline",
  variant: "default",
  name: "Home Cancel Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HomeCancelOutlineLogo;
