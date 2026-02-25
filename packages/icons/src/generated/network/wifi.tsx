/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface WifiProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Wifi = React.forwardRef<SVGSVGElement, WifiProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12 20h.01" />
  <path d="M2 8.82a15 15 0 0 1 20 0" />
  <path d="M5 12.859a10 10 0 0 1 14 0" />
  <path d="M8.5 16.429a5 5 0 0 1 7 0" />
    </svg>
  )
);
Wifi.displayName = "Wifi";
export const WifiMetadata = { id: "wifi", baseId: "wifi", variant: "default", name: "Wifi", category: "network", tags: [], viewBox: "0 0 24 24" } as const;
export default Wifi;
