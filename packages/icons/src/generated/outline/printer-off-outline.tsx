/**
 * Auto-generated logo component: Printer Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PrinterOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PrinterOffOutlineLogo = React.forwardRef<SVGSVGElement, PrinterOffOutlineLogoProps>(
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
      <path d="M20.412 16.416c.363 -.362 .588 -.863 .588 -1.416v-4a2 2 0 0 0 -2 -2h-6m-4 0h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" />
  <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6c-.551 0 -1.05 .223 -1.412 .584m-.588 3.416v2" />
  <path d="M17 17v2a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2h4" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

PrinterOffOutlineLogo.displayName = "PrinterOffOutlineLogo";

export const PrinterOffOutlineLogoMetadata = {
  id: "printer-off-outline",
  baseId: "printer-off-outline",
  variant: "default",
  name: "Printer Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PrinterOffOutlineLogo;
