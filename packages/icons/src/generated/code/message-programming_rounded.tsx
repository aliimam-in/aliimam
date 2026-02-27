/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MessageProgrammingRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MessageProgrammingRounded = React.forwardRef<SVGSVGElement, MessageProgrammingRoundedProps>(
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
      <path d="M8.5 18.97H8C4 18.97 2 17.97 2 12.97V7.96997C2 3.96997 4 1.96997 8 1.96997H16C20 1.96997 22 3.96997 22 7.96997V12.97C22 16.97 20 18.97 16 18.97H15.5C15.19 18.97 14.89 19.12 14.7 19.37L13.2 21.37C12.54 22.25 11.46 22.25 10.8 21.37L9.29999 19.37C9.13999 19.15 8.78 18.97 8.5 18.97Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 8.70001L6 10.7L8 12.7" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 8.70001L18 10.7L16 12.7" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 8.37L11 13.03" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
MessageProgrammingRounded.displayName = "MessageProgrammingRounded";
export const MessageProgrammingRoundedMetadata = { 
  id: "message-programming_rounded", 
  baseId: "message-programming", 
  variant: "rounded", 
  name: "Message Programming", 
  category: "code", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MessageProgrammingRounded;
