/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MessageRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MessageRounded = React.forwardRef<SVGSVGElement, MessageRoundedProps>(
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
      <path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.9965 11H16.0054"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9955 11H12.0045"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.99451 11H8.00349"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
MessageRounded.displayName = "MessageRounded";
export const MessageRoundedMetadata = { 
  id: "message_rounded", 
  baseId: "message", 
  variant: "rounded", 
  name: "Message", 
  category: "message", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MessageRounded;
