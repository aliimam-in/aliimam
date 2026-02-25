/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MessageCircleReplyProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MessageCircleReply = React.forwardRef<SVGSVGElement, MessageCircleReplyProps>(
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
      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
  <path d="m10 15-3-3 3-3" />
  <path d="M7 12h8a2 2 0 0 1 2 2v1" />
    </svg>
  )
);
MessageCircleReply.displayName = "MessageCircleReply";
export const MessageCircleReplyMetadata = { 
  id: "message-circle-reply", 
  baseId: "message-circle-reply", 
  variant: "default", 
  name: "Message Circle Reply", 
  category: "message", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MessageCircleReply;
