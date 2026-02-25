/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface NfcProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Nfc = React.forwardRef<SVGSVGElement, NfcProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M6 8.32a7.43 7.43 0 0 1 0 7.36" />
  <path d="M9.46 6.21a11.76 11.76 0 0 1 0 11.58" />
  <path d="M12.91 4.1a15.91 15.91 0 0 1 .01 15.8" />
  <path d="M16.37 2a20.16 20.16 0 0 1 0 20" />
    </svg>
  )
);
Nfc.displayName = "Nfc";
export const NfcMetadata = { id: "nfc", baseId: "nfc", variant: "default", name: "Nfc", category: "network", tags: [], viewBox: "0 0 24 24" } as const;
export default Nfc;
