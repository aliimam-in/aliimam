/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LampOnRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LampOnRounded = React.forwardRef<SVGSVGElement, LampOnRoundedProps>(
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
      <path d="M8.29999 18.0401V16.8801C5.99999 15.4901 4.10999 12.7801 4.10999 9.90005C4.10999 4.95005 8.65999 1.07005 13.8 2.19005C16.06 2.69005 18.04 4.19005 19.07 6.26005C21.16 10.4601 18.96 14.9201 15.73 16.8701V18.0301C15.73 18.3201 15.84 18.9901 14.77 18.9901H9.25999C8.15999 19.0001 8.29999 18.5701 8.29999 18.0401Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 22C10.79 21.35 13.21 21.35 15.5 22" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
LampOnRounded.displayName = "LampOnRounded";
export const LampOnRoundedMetadata = { 
  id: "lamp-on_rounded", 
  baseId: "lamp-on", 
  variant: "rounded", 
  name: "Lamp On", 
  category: "notification", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LampOnRounded;
