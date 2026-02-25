/**
 * Auto-generated logo component: Shield Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShieldMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShieldMinusOutlineLogo = React.forwardRef<SVGSVGElement, ShieldMinusOutlineLogoProps>(
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
      <path d="M12.46 20.871c-.153 .046 -.306 .089 -.46 .129a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.916 9.015" />
  <path d="M16 19h6" />
    </svg>
  )
);

ShieldMinusOutlineLogo.displayName = "ShieldMinusOutlineLogo";

export const ShieldMinusOutlineLogoMetadata = {
  id: "shield-minus-outline",
  baseId: "shield-minus-outline",
  variant: "default",
  name: "Shield Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShieldMinusOutlineLogo;
