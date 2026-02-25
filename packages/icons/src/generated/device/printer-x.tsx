/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PrinterXProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PrinterX = React.forwardRef<SVGSVGElement, PrinterXProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12.531 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6.377" />
  <path d="m16.5 16.5 5 5" />
  <path d="m16.5 21.5 5-5" />
  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.5" />
  <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
    </svg>
  )
);
PrinterX.displayName = "PrinterX";
export const PrinterXMetadata = { id: "printer-x", baseId: "printer-x", variant: "default", name: "Printer X", category: "device", tags: [], viewBox: "0 0 24 24" } as const;
export default PrinterX;
