/**
 * Auto-generated logo component: Banknote (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BanknoteLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BanknoteLogo = React.forwardRef<SVGSVGElement, BanknoteLogoProps>(
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
      <rect width="20" height="12" x="2" y="6" rx="2" />
  <circle cx="12" cy="12" r="2" />
  <path d="M6 12h.01M18 12h.01" />
    </svg>
  )
);

BanknoteLogo.displayName = "BanknoteLogo";

export const BanknoteLogoMetadata = {
  id: "banknote",
  baseId: "banknote",
  variant: "default",
  name: "Banknote",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BanknoteLogo;
