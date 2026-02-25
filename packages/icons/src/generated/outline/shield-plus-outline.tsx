/**
 * Auto-generated logo component: Shield Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShieldPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShieldPlusOutlineLogo = React.forwardRef<SVGSVGElement, ShieldPlusOutlineLogoProps>(
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
      <path d="M12.462 20.87c-.153 .047 -.307 .09 -.462 .13a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 .11 6.37" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

ShieldPlusOutlineLogo.displayName = "ShieldPlusOutlineLogo";

export const ShieldPlusOutlineLogoMetadata = {
  id: "shield-plus-outline",
  baseId: "shield-plus-outline",
  variant: "default",
  name: "Shield Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShieldPlusOutlineLogo;
