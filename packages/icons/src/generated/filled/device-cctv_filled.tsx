/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DeviceCctvFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DeviceCctvFilled = React.forwardRef<SVGSVGElement, DeviceCctvFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M20 8v6a8 8 0 1 1 -16 0v-6zm-8 2a4 4 0 0 0 -3.996 3.826l-.004 .174a4 4 0 1 0 4 -4m.01 3a1 1 0 0 1 .117 1.993l-.127 .007a1 1 0 0 1 -.117 -1.993zm-10.01 -8v-1a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2" />
    </svg>
  )
);
DeviceCctvFilled.displayName = "DeviceCctvFilled";
export const DeviceCctvFilledMetadata = { id: "device-cctv_filled", baseId: "device-cctv", variant: "filled", name: "Device Cctv", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default DeviceCctvFilled;
