/**
 * Auto-generated logo component: Tax Pound Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TaxPoundOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TaxPoundOutlineLogo = React.forwardRef<SVGSVGElement, TaxPoundOutlineLogoProps>(
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
      <path d="M8.487 21h7.026a4 4 0 0 0 3.808 -5.224l-1.706 -5.306a5 5 0 0 0 -4.76 -3.47h-1.71a5 5 0 0 0 -4.76 3.47l-1.706 5.306a4 4 0 0 0 3.808 5.224" />
  <path d="M15 3q -1 4 -3 4t -3 -4l6 0" />
  <path d="M14 11h-1a2 2 0 0 0 -2 2v2c0 1.105 -.395 2 -1.5 2h4.5" />
  <path d="M10 14h3" />
    </svg>
  )
);

TaxPoundOutlineLogo.displayName = "TaxPoundOutlineLogo";

export const TaxPoundOutlineLogoMetadata = {
  id: "tax-pound-outline",
  baseId: "tax-pound-outline",
  variant: "default",
  name: "Tax Pound Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TaxPoundOutlineLogo;
