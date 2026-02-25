/**
 * Auto-generated logo component: Businessplan Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BusinessplanOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BusinessplanOutlineLogo = React.forwardRef<SVGSVGElement, BusinessplanOutlineLogoProps>(
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
      <path d="M11 6a5 3 0 1 0 10 0a5 3 0 1 0 -10 0" />
  <path d="M11 6v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
  <path d="M11 10v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
  <path d="M11 14v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
  <path d="M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
  <path d="M5 15v1m0 -8v1" />
    </svg>
  )
);

BusinessplanOutlineLogo.displayName = "BusinessplanOutlineLogo";

export const BusinessplanOutlineLogoMetadata = {
  id: "businessplan-outline",
  baseId: "businessplan-outline",
  variant: "default",
  name: "Businessplan Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BusinessplanOutlineLogo;
