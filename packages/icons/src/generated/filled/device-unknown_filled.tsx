/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DeviceUnknownFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DeviceUnknownFilled = React.forwardRef<SVGSVGElement, DeviceUnknownFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-5 13a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m1.368 -6.673a2.98 2.98 0 0 0 -3.631 .728a1 1 0 0 0 1.526 1.292a.98 .98 0 0 1 1.195 -.239a1 1 0 0 1 -.455 1.892a1 1 0 0 0 -.006 2a3 3 0 0 0 1.371 -5.673" />
    </svg>
  )
);
DeviceUnknownFilled.displayName = "DeviceUnknownFilled";
export const DeviceUnknownFilledMetadata = { id: "device-unknown_filled", baseId: "device-unknown", variant: "filled", name: "Device Unknown", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default DeviceUnknownFilled;
