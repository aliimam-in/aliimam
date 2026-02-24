/**
 * Auto-generated logo component: Printer (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PrinterLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PrinterLogo = React.forwardRef<SVGSVGElement, PrinterLogoProps>(
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
      <polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>
    </svg>
  )
);

PrinterLogo.displayName = "PrinterLogo";

export const PrinterLogoMetadata = {
  id: "printer",
  baseId: "printer",
  variant: "default",
  name: "Printer",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PrinterLogo;
