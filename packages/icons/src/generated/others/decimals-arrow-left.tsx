/**
 * Auto-generated logo component: Decimals Arrow Left (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DecimalsArrowLeftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DecimalsArrowLeftLogo = React.forwardRef<SVGSVGElement, DecimalsArrowLeftLogoProps>(
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
      <path d="m13 21-3-3 3-3" />
  <path d="M20 18H10" />
  <path d="M3 11h.01" />
  <rect x="6" y="3" width="5" height="8" rx="2.5" />
    </svg>
  )
);

DecimalsArrowLeftLogo.displayName = "DecimalsArrowLeftLogo";

export const DecimalsArrowLeftLogoMetadata = {
  id: "decimals-arrow-left",
  baseId: "decimals-arrow-left",
  variant: "default",
  name: "Decimals Arrow Left",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DecimalsArrowLeftLogo;
