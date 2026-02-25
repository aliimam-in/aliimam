/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MessageSquarePlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MessageSquarePlus = React.forwardRef<SVGSVGElement, MessageSquarePlusProps>(
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
  <path d="M12 8v6" />
  <path d="M9 11h6" />
    </svg>
  )
);
MessageSquarePlus.displayName = "MessageSquarePlus";
export const MessageSquarePlusMetadata = { 
  id: "message-square-plus", 
  baseId: "message-square-plus", 
  variant: "default", 
  name: "Message Square Plus", 
  category: "message", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MessageSquarePlus;
