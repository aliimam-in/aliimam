/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MessageTimeRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MessageTimeRounded = React.forwardRef<SVGSVGElement, MessageTimeRoundedProps>(
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
      <path d="M22 7.42999V13.43C22 14.93 21.5 16.18 20.62 17.06C19.75 17.93 18.5 18.43 17 18.43V20.56C17 21.36 16.11 21.84 15.45 21.4L11 18.43H8.88C8.96 18.13 9 17.82 9 17.5C9 16.48 8.61 15.54 7.97 14.83C7.25 14.01 6.18 13.5 5 13.5C3.88 13.5 2.86 13.96 2.13 14.71C2.04 14.31 2 13.88 2 13.43V7.42999C2 4.42999 4 2.42999 7 2.42999H17C20 2.42999 22 4.42999 22 7.42999Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 17.5C9 18.7 8.47001 19.77 7.64001 20.5C6.93001 21.12 6.01 21.5 5 21.5C2.79 21.5 1 19.71 1 17.5C1 16.24 1.58 15.11 2.5 14.38C3.19 13.83 4.06 13.5 5 13.5C7.21 13.5 9 15.29 9 17.5Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.25 16.25V17.75L4 18.5" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 10.5H15.5" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
MessageTimeRounded.displayName = "MessageTimeRounded";
export const MessageTimeRoundedMetadata = { 
  id: "message-time_rounded", 
  baseId: "message-time", 
  variant: "rounded", 
  name: "Message Time", 
  category: "message", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MessageTimeRounded;
