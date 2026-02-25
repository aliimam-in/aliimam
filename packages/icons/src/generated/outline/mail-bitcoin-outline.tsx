/**
 * Auto-generated logo component: Mail Bitcoin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MailBitcoinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MailBitcoinOutlineLogo = React.forwardRef<SVGSVGElement, MailBitcoinOutlineLogoProps>(
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
  <path d="M13.5 19h-8.5a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4" />
  <path d="M3 7l9 6l9 -6" />
    </svg>
  )
);

MailBitcoinOutlineLogo.displayName = "MailBitcoinOutlineLogo";

export const MailBitcoinOutlineLogoMetadata = {
  id: "mail-bitcoin-outline",
  baseId: "mail-bitcoin-outline",
  variant: "default",
  name: "Mail Bitcoin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MailBitcoinOutlineLogo;
