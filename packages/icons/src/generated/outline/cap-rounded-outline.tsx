/**
 * Auto-generated logo component: Cap Rounded Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CapRoundedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CapRoundedOutlineLogo = React.forwardRef<SVGSVGElement, CapRoundedOutlineLogoProps>(
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
      <path d="M20 6h-9a6 6 0 1 0 0 12h9" />
  <path d="M13 12a2 2 0 1 1 -4 0a2 2 0 0 1 4 0" />
  <path d="M13 12h7" />
    </svg>
  )
);

CapRoundedOutlineLogo.displayName = "CapRoundedOutlineLogo";

export const CapRoundedOutlineLogoMetadata = {
  id: "cap-rounded-outline",
  baseId: "cap-rounded-outline",
  variant: "default",
  name: "Cap Rounded Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CapRoundedOutlineLogo;
