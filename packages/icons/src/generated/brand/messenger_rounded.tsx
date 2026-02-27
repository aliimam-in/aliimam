/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MessengerRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MessengerRounded = React.forwardRef<SVGSVGElement, MessengerRoundedProps>(
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
      <path d="M5.7 18.4V22L9 20.1C9.9 20.4 10.9 20.5 12 20.5C17.5 20.5 22 16.4 22 11.2C22 6.1 17.5 2 12 2C6.5 2 2 6.1 2 11.3C2 14.2 3.4 16.7 5.7 18.4Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.3 9.20001L7.5 13.7L11.2 12.8L12.7 13.7L16.5 9.20001L13 10.1L11.3 9.20001Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
MessengerRounded.displayName = "MessengerRounded";
export const MessengerRoundedMetadata = { 
  id: "messenger_rounded", 
  baseId: "messenger", 
  variant: "rounded", 
  name: "Messenger", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MessengerRounded;
