/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Messages2RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Messages2Rounded = React.forwardRef<SVGSVGElement, Messages2RoundedProps>(
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
      <path d="M18.47 16.83L18.86 19.99C18.96 20.82 18.07 21.4 17.36 20.97L13.17 18.48C12.71 18.48 12.26 18.45 11.82 18.39C12.56 17.52 13 16.42 13 15.23C13 12.39 10.54 10.09 7.49997 10.09C6.33997 10.09 5.26997 10.42 4.37997 11C4.34997 10.75 4.33997 10.5 4.33997 10.24C4.33997 5.68999 8.28997 2 13.17 2C18.05 2 22 5.68999 22 10.24C22 12.94 20.61 15.33 18.47 16.83Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 15.23C13 16.42 12.56 17.52 11.82 18.39C10.83 19.59 9.26 20.36 7.5 20.36L4.89 21.91C4.45 22.18 3.89 21.81 3.95 21.3L4.2 19.33C2.86 18.4 2 16.91 2 15.23C2 13.47 2.94 11.92 4.38 11C5.27 10.42 6.34 10.09 7.5 10.09C10.54 10.09 13 12.39 13 15.23Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Messages2Rounded.displayName = "Messages2Rounded";
export const Messages2RoundedMetadata = { 
  id: "messages-2_rounded", 
  baseId: "messages-2", 
  variant: "rounded", 
  name: "Messages 2", 
  category: "message", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Messages2Rounded;
