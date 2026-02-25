/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MessageSquareDotProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MessageSquareDot = React.forwardRef<SVGSVGElement, MessageSquareDotProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12.7 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4.7" />
  <circle cx="19" cy="6" r="3" />
    </svg>
  )
);
MessageSquareDot.displayName = "MessageSquareDot";
export const MessageSquareDotMetadata = { id: "message-square-dot", baseId: "message-square-dot", variant: "default", name: "Message Square Dot", category: "message", tags: [], viewBox: "0 0 24 24" } as const;
export default MessageSquareDot;
