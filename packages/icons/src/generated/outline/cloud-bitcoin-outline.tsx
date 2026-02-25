/**
 * Auto-generated logo component: Cloud Bitcoin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CloudBitcoinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CloudBitcoinOutlineLogo = React.forwardRef<SVGSVGElement, CloudBitcoinOutlineLogoProps>(
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
      <path d="M17 21v-6m2 0v-1.5m0 9v-1.5m-2 -3h3m-1 0h.5a1.5 1.5 0 0 1 0 3h-3.5m3 -3h.5a1.5 1.5 0 0 0 0 -3h-3.5" />
  <path d="M13.5 18.004h-6.843c-2.572 -.004 -4.657 -2.011 -4.657 -4.487s2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.28 1.023 1.957 2.51 1.873 4.027" />
    </svg>
  )
);

CloudBitcoinOutlineLogo.displayName = "CloudBitcoinOutlineLogo";

export const CloudBitcoinOutlineLogoMetadata = {
  id: "cloud-bitcoin-outline",
  baseId: "cloud-bitcoin-outline",
  variant: "default",
  name: "Cloud Bitcoin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CloudBitcoinOutlineLogo;
