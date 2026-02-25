/**
 * Auto-generated logo component: Tax Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TaxOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TaxOutlineLogo = React.forwardRef<SVGSVGElement, TaxOutlineLogoProps>(
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
  <path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
  <path d="M12 10v1" />
  <path d="M12 17v1" />
    </svg>
  )
);

TaxOutlineLogo.displayName = "TaxOutlineLogo";

export const TaxOutlineLogoMetadata = {
  id: "tax-outline",
  baseId: "tax-outline",
  variant: "default",
  name: "Tax Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TaxOutlineLogo;
