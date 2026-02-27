/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Send2RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Send2Rounded = React.forwardRef<SVGSVGElement, Send2RoundedProps>(
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
      <path d="M7.39999 6.32L15.89 3.49C19.7 2.22 21.77 4.3 20.51 8.11L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23 7.39999 6.32Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.11 13.65L13.69 10.06"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Send2Rounded.displayName = "Send2Rounded";
export const Send2RoundedMetadata = { 
  id: "send-2_rounded", 
  baseId: "send-2", 
  variant: "rounded", 
  name: "Send 2", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Send2Rounded;
