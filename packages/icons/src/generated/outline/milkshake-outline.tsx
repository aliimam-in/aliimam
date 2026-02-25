/**
 * Auto-generated logo component: Milkshake Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MilkshakeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MilkshakeOutlineLogo = React.forwardRef<SVGSVGElement, MilkshakeOutlineLogoProps>(
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
      <path d="M17 10a5 5 0 0 0 -10 0" />
  <path d="M6 11a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1l0 -1" />
  <path d="M7 13l1.81 7.243a1 1 0 0 0 .97 .757h4.44a1 1 0 0 0 .97 -.757l1.81 -7.243" />
  <path d="M12 5v-2" />
    </svg>
  )
);

MilkshakeOutlineLogo.displayName = "MilkshakeOutlineLogo";

export const MilkshakeOutlineLogoMetadata = {
  id: "milkshake-outline",
  baseId: "milkshake-outline",
  variant: "default",
  name: "Milkshake Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MilkshakeOutlineLogo;
