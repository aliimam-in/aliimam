/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MessageAdd1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MessageAdd1Rounded = React.forwardRef<SVGSVGElement, MessageAdd1RoundedProps>(
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
      <path d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 12H15.5"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 15.5V8.5"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
MessageAdd1Rounded.displayName = "MessageAdd1Rounded";
export const MessageAdd1RoundedMetadata = { 
  id: "message-add-1_rounded", 
  baseId: "message-add-1", 
  variant: "rounded", 
  name: "Message Add 1", 
  category: "message", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MessageAdd1Rounded;
