/**
 * Auto-generated logo component: Flag Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FlagMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FlagMinusOutlineLogo = React.forwardRef<SVGSVGElement, FlagMinusOutlineLogoProps>(
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
      <path d="M14.373 15.301a4.978 4.978 0 0 1 -2.373 -1.301a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9" />
  <path d="M5 21v-7" />
  <path d="M16 19h6" />
    </svg>
  )
);

FlagMinusOutlineLogo.displayName = "FlagMinusOutlineLogo";

export const FlagMinusOutlineLogoMetadata = {
  id: "flag-minus-outline",
  baseId: "flag-minus-outline",
  variant: "default",
  name: "Flag Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FlagMinusOutlineLogo;
