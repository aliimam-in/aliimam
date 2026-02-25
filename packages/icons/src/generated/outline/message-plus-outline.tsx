/**
 * Auto-generated logo component: Message Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MessagePlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MessagePlusOutlineLogo = React.forwardRef<SVGSVGElement, MessagePlusOutlineLogoProps>(
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
  <path d="M12.01 18.594l-4.01 2.406v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

MessagePlusOutlineLogo.displayName = "MessagePlusOutlineLogo";

export const MessagePlusOutlineLogoMetadata = {
  id: "message-plus-outline",
  baseId: "message-plus-outline",
  variant: "default",
  name: "Message Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MessagePlusOutlineLogo;
