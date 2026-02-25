/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface UsbProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Usb = React.forwardRef<SVGSVGElement, UsbProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <circle cx="10" cy="7" r="1" />
  <circle cx="4" cy="20" r="1" />
  <path d="M4.7 19.3 19 5" />
  <path d="m21 3-3 1 2 2Z" />
  <path d="M9.26 7.68 5 12l2 5" />
  <path d="m10 14 5 2 3.5-3.5" />
  <path d="m18 12 1-1 1 1-1 1Z" />
    </svg>
  )
);
Usb.displayName = "Usb";
export const UsbMetadata = { id: "usb", baseId: "usb", variant: "default", name: "Usb", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Usb;
