/**
 * Auto-generated logo component: Decimals Arrow Right (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DecimalsArrowRightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DecimalsArrowRightLogo = React.forwardRef<SVGSVGElement, DecimalsArrowRightLogoProps>(
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
      <path d="M10 18h10" />
  <path d="m17 21 3-3-3-3" />
  <path d="M3 11h.01" />
  <rect x="15" y="3" width="5" height="8" rx="2.5" />
  <rect x="6" y="3" width="5" height="8" rx="2.5" />
    </svg>
  )
);

DecimalsArrowRightLogo.displayName = "DecimalsArrowRightLogo";

export const DecimalsArrowRightLogoMetadata = {
  id: "decimals-arrow-right",
  baseId: "decimals-arrow-right",
  variant: "default",
  name: "Decimals Arrow Right",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DecimalsArrowRightLogo;
