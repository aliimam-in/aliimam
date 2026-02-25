/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DeviceWatchFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DeviceWatchFilled = React.forwardRef<SVGSVGElement, DeviceWatchFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M15 2a1 1 0 0 1 1 1v2.126c1.726 .445 3 2.01 3 3.874v6a4 4 0 0 1 -3 3.874v2.126a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-2.126a4 4 0 0 1 -3 -3.874v-6a4 4 0 0 1 3 -3.874v-2.126a1 1 0 0 1 1 -1zm-1 17h-4v1h4zm0 -15h-4v1h4z" />
    </svg>
  )
);
DeviceWatchFilled.displayName = "DeviceWatchFilled";
export const DeviceWatchFilledMetadata = { id: "device-watch_filled", baseId: "device-watch", variant: "filled", name: "Device Watch", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default DeviceWatchFilled;
