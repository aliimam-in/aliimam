/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Message2FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Message2Filled = React.forwardRef<SVGSVGElement, Message2FilledProps>(
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
      <path d="M17 2.42993H7C4 2.42993 2 4.42993 2 7.42993V13.4299C2 16.4299 4 18.4299 7 18.4299H11L15.45 21.3899C16.11 21.8299 17 21.3599 17 20.5599V18.4299C20 18.4299 22 16.4299 22 13.4299V7.42993C22 4.42993 20 2.42993 17 2.42993ZM15.5 11.2499H8.5C8.09 11.2499 7.75 10.9099 7.75 10.4999C7.75 10.0899 8.09 9.74993 8.5 9.74993H15.5C15.91 9.74993 16.25 10.0899 16.25 10.4999C16.25 10.9099 15.91 11.2499 15.5 11.2499Z" fill="currentColor"/>
    </svg>
  )
);
Message2Filled.displayName = "Message2Filled";
export const Message2FilledMetadata = { 
  id: "message-2_filled", 
  baseId: "message-2", 
  variant: "filled", 
  name: "Message 2", 
  category: "message", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Message2Filled;
