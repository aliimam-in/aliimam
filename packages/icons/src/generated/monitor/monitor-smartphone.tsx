/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MonitorSmartphoneProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MonitorSmartphone = React.forwardRef<SVGSVGElement, MonitorSmartphoneProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" />
  <path d="M10 19v-3.96 3.15" />
  <path d="M7 19h5" />
  <rect width="6" height="10" x="16" y="12" rx="2" />
    </svg>
  )
);
MonitorSmartphone.displayName = "MonitorSmartphone";
export const MonitorSmartphoneMetadata = { id: "monitor-smartphone", baseId: "monitor-smartphone", variant: "default", name: "Monitor Smartphone", category: "monitor", tags: [], viewBox: "0 0 24 24" } as const;
export default MonitorSmartphone;
