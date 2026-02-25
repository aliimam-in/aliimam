/**
 * Auto-generated logo component: Message Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MessageMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MessageMinusOutlineLogo = React.forwardRef<SVGSVGElement, MessageMinusOutlineLogoProps>(
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
  <path d="M11.976 18.614l-3.976 2.386v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8" />
  <path d="M16 19h6" />
    </svg>
  )
);

MessageMinusOutlineLogo.displayName = "MessageMinusOutlineLogo";

export const MessageMinusOutlineLogoMetadata = {
  id: "message-minus-outline",
  baseId: "message-minus-outline",
  variant: "default",
  name: "Message Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MessageMinusOutlineLogo;
