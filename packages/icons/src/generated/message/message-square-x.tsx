/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MessageSquareXProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MessageSquareX = React.forwardRef<SVGSVGElement, MessageSquareXProps>(
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
      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
  <path d="m14.5 8.5-5 5" />
  <path d="m9.5 8.5 5 5" />
    </svg>
  )
);
MessageSquareX.displayName = "MessageSquareX";
export const MessageSquareXMetadata = { 
  id: "message-square-x", 
  baseId: "message-square-x", 
  variant: "default", 
  name: "Message Square X", 
  category: "message", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MessageSquareX;
