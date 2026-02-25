/**
 * Auto-generated logo component: Message Dots Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MessageDotsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MessageDotsOutlineLogo = React.forwardRef<SVGSVGElement, MessageDotsOutlineLogoProps>(
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
      <path d="M12 11v.01" />
  <path d="M8 11v.01" />
  <path d="M16 11v.01" />
  <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3l12 0" />
    </svg>
  )
);

MessageDotsOutlineLogo.displayName = "MessageDotsOutlineLogo";

export const MessageDotsOutlineLogoMetadata = {
  id: "message-dots-outline",
  baseId: "message-dots-outline",
  variant: "default",
  name: "Message Dots Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MessageDotsOutlineLogo;
