/**
 * Auto-generated logo component: Currency Dinar Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyDinarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyDinarOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyDinarOutlineLogoProps>(
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
      <path d="M14 20.01v-.01" />
  <path d="M6 13l2.386 -.9a1 1 0 0 0 -.095 -1.902l-1.514 -.404a1 1 0 0 1 -.102 -1.9l2.325 -.894" />
  <path d="M3 14v1a3 3 0 0 0 3 3h4.161a3 3 0 0 0 2.983 -3.32l-1.144 -10.68" />
  <path d="M16 17l1 1h2a2 2 0 0 0 1.649 -3.131l-2.653 -3.869" />
    </svg>
  )
);

CurrencyDinarOutlineLogo.displayName = "CurrencyDinarOutlineLogo";

export const CurrencyDinarOutlineLogoMetadata = {
  id: "currency-dinar-outline",
  baseId: "currency-dinar-outline",
  variant: "default",
  name: "Currency Dinar Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyDinarOutlineLogo;
