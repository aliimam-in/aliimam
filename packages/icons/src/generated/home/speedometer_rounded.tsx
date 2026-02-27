/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SpeedometerRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SpeedometerRounded = React.forwardRef<SVGSVGElement, SpeedometerRoundedProps>(
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
      <path d="M19.14 19.5C20.91 17.7 22 15.22 22 12.5C22 6.98 17.52 2.5 12 2.5C6.48 2.5 2 6.98 2 12.5C2 15.22 3.08 17.68 4.84 19.49" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 21.5C13.8667 21.5 15.38 19.9867 15.38 18.12C15.38 16.2533 13.8667 14.74 12 14.74C10.1333 14.74 8.62 16.2533 8.62 18.12C8.62 19.9867 10.1333 21.5 12 21.5Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.25 12H16C16.82 12 17.5 11.33 17.5 10.5C17.5 9.68 16.82 9 16 9C15.18 9 14.5 9.67 14.5 10.5V11.25C14.5 11.66 14.84 12 15.25 12Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
SpeedometerRounded.displayName = "SpeedometerRounded";
export const SpeedometerRoundedMetadata = { 
  id: "speedometer_rounded", 
  baseId: "speedometer", 
  variant: "rounded", 
  name: "Speedometer", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SpeedometerRounded;
