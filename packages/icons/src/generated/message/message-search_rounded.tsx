/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MessageSearchRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MessageSearchRounded = React.forwardRef<SVGSVGElement, MessageSearchRoundedProps>(
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
      <path d="M13.2 21.37C12.54 22.25 11.46 22.25 10.8 21.37L9.29999 19.37C9.12999 19.15 8.77 18.97 8.5 18.97H8C4 18.97 2 17.97 2 12.97V7.96997C2 3.96997 4 1.96997 8 1.96997H16C20 1.96997 22 3.96997 22 7.96997V12.97" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 22L21 21" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.9965 11H16.0054" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9955 11H12.0045" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.99451 11H8.00349" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
MessageSearchRounded.displayName = "MessageSearchRounded";
export const MessageSearchRoundedMetadata = { 
  id: "message-search_rounded", 
  baseId: "message-search", 
  variant: "rounded", 
  name: "Message Search", 
  category: "message", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MessageSearchRounded;
