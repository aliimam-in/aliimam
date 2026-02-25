/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Message2FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Message2Filled = React.forwardRef<SVGSVGElement, Message2FilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-2.586l-2.707 2.707a1 1 0 0 1 -1.32 .083l-.094 -.083l-2.708 -2.707h-2.585a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-8a4 4 0 0 1 4 -4zm-4 9h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2m2 -4h-8a1 1 0 1 0 0 2h8a1 1 0 0 0 0 -2" />
    </svg>
  )
);
Message2Filled.displayName = "Message2Filled";
export const Message2FilledMetadata = { id: "message-2_filled", baseId: "message-2", variant: "filled", name: "Message 2", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default Message2Filled;
