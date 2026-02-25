/**
 * Auto-generated logo component: Shield Half Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShieldHalfOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShieldHalfOutlineLogo = React.forwardRef<SVGSVGElement, ShieldHalfOutlineLogoProps>(
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
      <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
  <path d="M12 3v18" />
    </svg>
  )
);

ShieldHalfOutlineLogo.displayName = "ShieldHalfOutlineLogo";

export const ShieldHalfOutlineLogoMetadata = {
  id: "shield-half-outline",
  baseId: "shield-half-outline",
  variant: "default",
  name: "Shield Half Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShieldHalfOutlineLogo;
