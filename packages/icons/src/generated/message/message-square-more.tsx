/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MessageSquareMoreProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MessageSquareMore = React.forwardRef<SVGSVGElement, MessageSquareMoreProps>(
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
  <path d="M12 11h.01" />
  <path d="M16 11h.01" />
  <path d="M8 11h.01" />
    </svg>
  )
);
MessageSquareMore.displayName = "MessageSquareMore";
export const MessageSquareMoreMetadata = { 
  id: "message-square-more", 
  baseId: "message-square-more", 
  variant: "default", 
  name: "Message Square More", 
  category: "message", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MessageSquareMore;
