/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DeviceTvFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DeviceTvFilled = React.forwardRef<SVGSVGElement, DeviceTvFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M8.707 2.293l3.293 3.292l3.293 -3.292a1 1 0 0 1 1.32 -.083l.094 .083a1 1 0 0 1 0 1.414l-2.293 2.293h4.586a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3h4.585l-2.292 -2.293a1 1 0 0 1 1.414 -1.414" />
    </svg>
  )
);
DeviceTvFilled.displayName = "DeviceTvFilled";
export const DeviceTvFilledMetadata = { id: "device-tv_filled", baseId: "device-tv", variant: "filled", name: "Device Tv", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default DeviceTvFilled;
