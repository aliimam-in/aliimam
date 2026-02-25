/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface EthernetPortProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const EthernetPort = React.forwardRef<SVGSVGElement, EthernetPortProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z" />
  <path d="M6 8v1" />
  <path d="M10 8v1" />
  <path d="M14 8v1" />
  <path d="M18 8v1" />
    </svg>
  )
);
EthernetPort.displayName = "EthernetPort";
export const EthernetPortMetadata = { id: "ethernet-port", baseId: "ethernet-port", variant: "default", name: "Ethernet Port", category: "notification", tags: [], viewBox: "0 0 24 24" } as const;
export default EthernetPort;
