/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Microphone2RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Microphone2Rounded = React.forwardRef<SVGSVGElement, Microphone2RoundedProps>(
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
      <path d="M12 15.5C14.21 15.5 16 13.71 16 11.5V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11.5C8 13.71 9.79 15.5 12 15.5Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.3501 9.65002V11.35C4.3501 15.57 7.7801 19 12.0001 19C16.2201 19 19.6501 15.57 19.6501 11.35V9.65002"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.6101 6.43C11.5101 6.1 12.4901 6.1 13.3901 6.43"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.2 8.54995C11.73 8.40995 12.28 8.40995 12.81 8.54995"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 19V22"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Microphone2Rounded.displayName = "Microphone2Rounded";
export const Microphone2RoundedMetadata = { 
  id: "microphone-2_rounded", 
  baseId: "microphone-2", 
  variant: "rounded", 
  name: "Microphone 2", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Microphone2Rounded;
