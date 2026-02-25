/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MessageSquareLockProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MessageSquareLock = React.forwardRef<SVGSVGElement, MessageSquareLockProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M22 8.5V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H10" />
  <path d="M20 15v-2a2 2 0 0 0-4 0v2" />
  <rect x="14" y="15" width="8" height="5" rx="1" />
    </svg>
  )
);
MessageSquareLock.displayName = "MessageSquareLock";
export const MessageSquareLockMetadata = { id: "message-square-lock", baseId: "message-square-lock", variant: "default", name: "Message Square Lock", category: "message", tags: [], viewBox: "0 0 24 24" } as const;
export default MessageSquareLock;
