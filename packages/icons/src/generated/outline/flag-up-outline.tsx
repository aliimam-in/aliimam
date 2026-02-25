/**
 * Auto-generated logo component: Flag Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FlagUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FlagUpOutlineLogo = React.forwardRef<SVGSVGElement, FlagUpOutlineLogoProps>(
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
      <path d="M14.138 15.241a4.979 4.979 0 0 1 -2.138 -1.241a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v7" />
  <path d="M5 21v-7" />
  <path d="M19 22v-6" />
  <path d="M22 19l-3 -3l-3 3" />
    </svg>
  )
);

FlagUpOutlineLogo.displayName = "FlagUpOutlineLogo";

export const FlagUpOutlineLogoMetadata = {
  id: "flag-up-outline",
  baseId: "flag-up-outline",
  variant: "default",
  name: "Flag Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FlagUpOutlineLogo;
