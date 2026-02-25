/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DeviceImacFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DeviceImacFilled = React.forwardRef<SVGSVGElement, DeviceImacFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M8 22a1 1 0 0 1 0 -2h.616l.25 -2h-4.866a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-4.867l.25 2h.617a1 1 0 0 1 0 2zm5.116 -4h-2.233l-.25 2h2.733z" />
    </svg>
  )
);
DeviceImacFilled.displayName = "DeviceImacFilled";
export const DeviceImacFilledMetadata = { id: "device-imac_filled", baseId: "device-imac", variant: "filled", name: "Device Imac", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default DeviceImacFilled;
