/**
 * Auto-generated logo component: Piggy Bank (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PiggyBankLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PiggyBankLogo = React.forwardRef<SVGSVGElement, PiggyBankLogoProps>(
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
      <path d="M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z" />
  <path d="M16 10h.01" />
  <path d="M2 8v1a2 2 0 0 0 2 2h1" />
    </svg>
  )
);

PiggyBankLogo.displayName = "PiggyBankLogo";

export const PiggyBankLogoMetadata = {
  id: "piggy-bank",
  baseId: "piggy-bank",
  variant: "default",
  name: "Piggy Bank",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PiggyBankLogo;
