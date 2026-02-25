/**
 * Auto-generated logo component: Banknote Arrow Up (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BanknoteArrowUpLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BanknoteArrowUpLogo = React.forwardRef<SVGSVGElement, BanknoteArrowUpLogoProps>(
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
      <path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" />
  <path d="M18 12h.01" />
  <path d="M19 22v-6" />
  <path d="m22 19-3-3-3 3" />
  <path d="M6 12h.01" />
  <circle cx="12" cy="12" r="2" />
    </svg>
  )
);

BanknoteArrowUpLogo.displayName = "BanknoteArrowUpLogo";

export const BanknoteArrowUpLogoMetadata = {
  id: "banknote-arrow-up",
  baseId: "banknote-arrow-up",
  variant: "default",
  name: "Banknote Arrow Up",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BanknoteArrowUpLogo;
