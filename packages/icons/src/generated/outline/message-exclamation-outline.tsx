/**
 * Auto-generated logo component: Message Exclamation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MessageExclamationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MessageExclamationOutlineLogo = React.forwardRef<SVGSVGElement, MessageExclamationOutlineLogoProps>(
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
  <path d="M15 18h-2l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5" />
  <path d="M19 16v3" />
  <path d="M19 22v.01" />
    </svg>
  )
);

MessageExclamationOutlineLogo.displayName = "MessageExclamationOutlineLogo";

export const MessageExclamationOutlineLogoMetadata = {
  id: "message-exclamation-outline",
  baseId: "message-exclamation-outline",
  variant: "default",
  name: "Message Exclamation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MessageExclamationOutlineLogo;
