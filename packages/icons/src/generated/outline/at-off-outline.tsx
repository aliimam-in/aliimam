/**
 * Auto-generated logo component: At Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AtOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AtOffOutlineLogo = React.forwardRef<SVGSVGElement, AtOffOutlineLogoProps>(
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
      <path d="M9.174 9.17a4 4 0 0 0 5.646 5.668m1.18 -2.838a4 4 0 0 0 -4 -4" />
  <path d="M19.695 15.697a2.5 2.5 0 0 0 1.305 -2.197v-1.5a9 9 0 0 0 -13.055 -8.047m-2.322 1.683a9 9 0 0 0 9.877 14.644" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

AtOffOutlineLogo.displayName = "AtOffOutlineLogo";

export const AtOffOutlineLogoMetadata = {
  id: "at-off-outline",
  baseId: "at-off-outline",
  variant: "default",
  name: "At Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AtOffOutlineLogo;
