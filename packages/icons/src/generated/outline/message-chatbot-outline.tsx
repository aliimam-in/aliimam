/**
 * Auto-generated logo component: Message Chatbot Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MessageChatbotOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MessageChatbotOutlineLogo = React.forwardRef<SVGSVGElement, MessageChatbotOutlineLogoProps>(
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
      <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12" />
  <path d="M9.5 9h.01" />
  <path d="M14.5 9h.01" />
  <path d="M9.5 13a3.5 3.5 0 0 0 5 0" />
    </svg>
  )
);

MessageChatbotOutlineLogo.displayName = "MessageChatbotOutlineLogo";

export const MessageChatbotOutlineLogoMetadata = {
  id: "message-chatbot-outline",
  baseId: "message-chatbot-outline",
  variant: "default",
  name: "Message Chatbot Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MessageChatbotOutlineLogo;
