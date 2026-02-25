/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SoapDispenserDropletProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SoapDispenserDroplet = React.forwardRef<SVGSVGElement, SoapDispenserDropletProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M10.5 2v4" />
  <path d="M14 2H7a2 2 0 0 0-2 2" />
  <path d="M19.29 14.76A6.67 6.67 0 0 1 17 11a6.6 6.6 0 0 1-2.29 3.76c-1.15.92-1.71 2.04-1.71 3.19 0 2.22 1.8 4.05 4 4.05s4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19" />
  <path d="M9.607 21H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h7V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  )
);
SoapDispenserDroplet.displayName = "SoapDispenserDroplet";
export const SoapDispenserDropletMetadata = { 
  id: "soap-dispenser-droplet", 
  baseId: "soap-dispenser-droplet", 
  variant: "default", 
  name: "Soap Dispenser Droplet", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SoapDispenserDroplet;
