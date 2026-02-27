/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LampRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LampRounded = React.forwardRef<SVGSVGElement, LampRoundedProps>(
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
      <path d="M5.78999 14.69H18.21C19.87 14.69 20.87 13.38 20.44 11.78L18.24 3.71C17.98 2.77 16.97 2 16.01 2H7.98999C7.02999 2 6.01999 2.77 5.76999 3.7L3.56999 11.77C3.12999 13.38 4.12999 14.69 5.78999 14.69Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 15V22"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 22H16"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
LampRounded.displayName = "LampRounded";
export const LampRoundedMetadata = { 
  id: "lamp_rounded", 
  baseId: "lamp", 
  variant: "rounded", 
  name: "Lamp", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LampRounded;
