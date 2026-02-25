/**
 * Auto-generated logo component: Message Square (default)
 * Category: message
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MessageSquareLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MessageSquareLogo = React.forwardRef<SVGSVGElement, MessageSquareLogoProps>(
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
      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
    </svg>
  )
);

MessageSquareLogo.displayName = "MessageSquareLogo";

export const MessageSquareLogoMetadata = {
  id: "message-square",
  baseId: "message-square",
  variant: "default",
  name: "Message Square",
  category: "message",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MessageSquareLogo;
