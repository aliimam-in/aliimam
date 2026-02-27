/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface StrongboxFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const StrongboxFilled = React.forwardRef<SVGSVGElement, StrongboxFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M13.25 12.5799V14.5599C13.25 15.2499 12.69 15.8099 12 15.8099C11.31 15.8099 10.75 15.2499 10.75 14.5599V12.5799C10.39 12.3599 10.11 12.0399 9.91 11.6599H3C2.45 11.6599 2 12.1099 2 12.6599V16.1899C2 19.3999 4.6 21.9999 7.81 21.9999H16.18C19.4 21.9999 22 19.3999 22 16.1899V12.6599C22 12.1099 21.55 11.6599 21 11.6599H14.09C13.89 12.0399 13.61 12.3599 13.25 12.5799Z" fill="currentColor"/>
<path d="M16.19 2H7.81C4.6 2 2 4.6 2 7.81V9.16C2 9.71 2.45 10.16 3 10.16H9.67C9.9 8.84 11.21 7.9 12.64 8.28C13.44 8.49 14.09 9.14 14.3 9.94C14.32 10.01 14.32 10.09 14.33 10.16H21C21.55 10.16 22 9.71 22 9.16V7.81C22 4.6 19.4 2 16.19 2Z" fill="currentColor"/>
    </svg>
  )
);
StrongboxFilled.displayName = "StrongboxFilled";
export const StrongboxFilledMetadata = { 
  id: "strongbox_filled", 
  baseId: "strongbox", 
  variant: "filled", 
  name: "Strongbox", 
  category: "finance", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default StrongboxFilled;
