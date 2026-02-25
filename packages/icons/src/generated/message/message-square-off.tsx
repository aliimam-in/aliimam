/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MessageSquareOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MessageSquareOff = React.forwardRef<SVGSVGElement, MessageSquareOffProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M19 19H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 1.184-1.826" />
  <path d="m2 2 20 20" />
  <path d="M8.656 3H20a2 2 0 0 1 2 2v11.344" />
    </svg>
  )
);
MessageSquareOff.displayName = "MessageSquareOff";
export const MessageSquareOffMetadata = { id: "message-square-off", baseId: "message-square-off", variant: "default", name: "Message Square Off", category: "message", tags: [], viewBox: "0 0 24 24" } as const;
export default MessageSquareOff;
