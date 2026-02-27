/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MessageText1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MessageText1Rounded = React.forwardRef<SVGSVGElement, MessageText1RoundedProps>(
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
<path d="M7 8H17"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 13H13"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
MessageText1Rounded.displayName = "MessageText1Rounded";
export const MessageText1RoundedMetadata = { 
  id: "message-text-1_rounded", 
  baseId: "message-text-1", 
  variant: "rounded", 
  name: "Message Text 1", 
  category: "message", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MessageText1Rounded;
