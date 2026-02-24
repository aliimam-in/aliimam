/**
 * Auto-generated logo component: Banknote X (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BanknoteXLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BanknoteXLogo = React.forwardRef<SVGSVGElement, BanknoteXLogoProps>(
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
      <path d="M13 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" />
  <path d="m17 17 5 5" />
  <path d="M18 12h.01" />
  <path d="m22 17-5 5" />
  <path d="M6 12h.01" />
  <circle cx="12" cy="12" r="2" />
    </svg>
  )
);

BanknoteXLogo.displayName = "BanknoteXLogo";

export const BanknoteXLogoMetadata = {
  id: "banknote-x",
  baseId: "banknote-x",
  variant: "default",
  name: "Banknote X",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BanknoteXLogo;
