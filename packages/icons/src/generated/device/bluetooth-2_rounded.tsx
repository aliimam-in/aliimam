/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Bluetooth2RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Bluetooth2Rounded = React.forwardRef<SVGSVGElement, Bluetooth2RoundedProps>(
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
      <path d="M4.64001 18.64L16.99 7.31998C17.5 6.84998 17.49 6.09997 16.95 5.64997L13.1 2.43998C12.1 1.60998 11.28 1.98998 11.28 3.28998V20.71C11.28 22.01 12.1 22.39 13.1 21.56L16.95 18.35C17.49 17.9 17.5 17.15 16.99 16.68L4.64001 5.35996"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Bluetooth2Rounded.displayName = "Bluetooth2Rounded";
export const Bluetooth2RoundedMetadata = { 
  id: "bluetooth-2_rounded", 
  baseId: "bluetooth-2", 
  variant: "rounded", 
  name: "Bluetooth 2", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Bluetooth2Rounded;
