/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MessageSquareCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MessageSquareCheck = React.forwardRef<SVGSVGElement, MessageSquareCheckProps>(
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
      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
  <path d="m9 11 2 2 4-4" />
    </svg>
  )
);
MessageSquareCheck.displayName = "MessageSquareCheck";
export const MessageSquareCheckMetadata = { 
  id: "message-square-check", 
  baseId: "message-square-check", 
  variant: "default", 
  name: "Message Square Check", 
  category: "message", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MessageSquareCheck;
