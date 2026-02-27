/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Send2FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Send2Filled = React.forwardRef<SVGSVGElement, Send2FilledProps>(
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
      <path d="M16.14 2.96004L7.11 5.96004C1.04 7.99004 1.04 11.3 7.11 13.32L9.79 14.21L10.68 16.89C12.7 22.96 16.02 22.96 18.04 16.89L21.05 7.87004C22.39 3.82004 20.19 1.61004 16.14 2.96004ZM16.46 8.34004L12.66 12.16C12.51 12.31 12.32 12.38 12.13 12.38C11.94 12.38 11.75 12.31 11.6 12.16C11.31 11.87 11.31 11.39 11.6 11.1L15.4 7.28004C15.69 6.99004 16.17 6.99004 16.46 7.28004C16.75 7.57004 16.75 8.05004 16.46 8.34004Z" fill="currentColor"/>
    </svg>
  )
);
Send2Filled.displayName = "Send2Filled";
export const Send2FilledMetadata = { 
  id: "send-2_filled", 
  baseId: "send-2", 
  variant: "filled", 
  name: "Send 2", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Send2Filled;
