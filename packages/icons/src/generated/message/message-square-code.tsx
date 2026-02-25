/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MessageSquareCodeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MessageSquareCode = React.forwardRef<SVGSVGElement, MessageSquareCodeProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
  <path d="m10 8-3 3 3 3" />
  <path d="m14 14 3-3-3-3" />
    </svg>
  )
);
MessageSquareCode.displayName = "MessageSquareCode";
export const MessageSquareCodeMetadata = { id: "message-square-code", baseId: "message-square-code", variant: "default", name: "Message Square Code", category: "message", tags: [], viewBox: "0 0 24 24" } as const;
export default MessageSquareCode;
