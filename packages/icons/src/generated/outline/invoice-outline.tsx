/**
 * Auto-generated logo component: Invoice Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface InvoiceOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const InvoiceOutlineLogo = React.forwardRef<SVGSVGElement, InvoiceOutlineLogoProps>(
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
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M19 12v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-14a2 2 0 0 1 2 -2h7l5 5v4.25" />
    </svg>
  )
);

InvoiceOutlineLogo.displayName = "InvoiceOutlineLogo";

export const InvoiceOutlineLogoMetadata = {
  id: "invoice-outline",
  baseId: "invoice-outline",
  variant: "default",
  name: "Invoice Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default InvoiceOutlineLogo;
