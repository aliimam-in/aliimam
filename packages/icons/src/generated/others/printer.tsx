/**
 * Auto-generated logo component: Printer (default)
 * Category: others
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
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
  <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
  <rect x="6" y="14" width="12" height="8" rx="1" />
    </svg>
  )
);

PrinterLogo.displayName = "PrinterLogo";

export const PrinterLogoMetadata = {
  id: "printer",
  baseId: "printer",
  variant: "default",
  name: "Printer",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PrinterLogo;
