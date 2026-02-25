/**
 * Auto-generated logo component: Message Pin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MessagePinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MessagePinOutlineLogo = React.forwardRef<SVGSVGElement, MessagePinOutlineLogoProps>(
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
  <path d="M12.007 18.596l-4.007 2.404v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" />
  <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879" />
  <path d="M19 18v.01" />
    </svg>
  )
);

MessagePinOutlineLogo.displayName = "MessagePinOutlineLogo";

export const MessagePinOutlineLogoMetadata = {
  id: "message-pin-outline",
  baseId: "message-pin-outline",
  variant: "default",
  name: "Message Pin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MessagePinOutlineLogo;
