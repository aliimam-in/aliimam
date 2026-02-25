/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MessageSquareDashedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MessageSquareDashed = React.forwardRef<SVGSVGElement, MessageSquareDashedProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M14 3h2" />
  <path d="M16 19h-2" />
  <path d="M2 12v-2" />
  <path d="M2 16v5.286a.71.71 0 0 0 1.212.502l1.149-1.149" />
  <path d="M20 19a2 2 0 0 0 2-2v-1" />
  <path d="M22 10v2" />
  <path d="M22 6V5a2 2 0 0 0-2-2" />
  <path d="M4 3a2 2 0 0 0-2 2v1" />
  <path d="M8 19h2" />
  <path d="M8 3h2" />
    </svg>
  )
);
MessageSquareDashed.displayName = "MessageSquareDashed";
export const MessageSquareDashedMetadata = { id: "message-square-dashed", baseId: "message-square-dashed", variant: "default", name: "Message Square Dashed", category: "message", tags: [], viewBox: "0 0 24 24" } as const;
export default MessageSquareDashed;
