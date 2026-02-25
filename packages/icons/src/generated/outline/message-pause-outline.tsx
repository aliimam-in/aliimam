/**
 * Auto-generated logo component: Message Pause Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MessagePauseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MessagePauseOutlineLogo = React.forwardRef<SVGSVGElement, MessagePauseOutlineLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M8 9h8" />
  <path d="M8 13h6" />
  <path d="M13 18l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6" />
  <path d="M17 17v5" />
  <path d="M21 17v5" />
    </svg>
  )
);

MessagePauseOutlineLogo.displayName = "MessagePauseOutlineLogo";

export const MessagePauseOutlineLogoMetadata = {
  id: "message-pause-outline",
  baseId: "message-pause-outline",
  variant: "default",
  name: "Message Pause Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MessagePauseOutlineLogo;
