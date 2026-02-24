/**
 * Auto-generated logo component: Message Circle More (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MessageCircleMoreLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MessageCircleMoreLogo = React.forwardRef<SVGSVGElement, MessageCircleMoreLogoProps>(
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
      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
  <path d="M8 12h.01" />
  <path d="M12 12h.01" />
  <path d="M16 12h.01" />
    </svg>
  )
);

MessageCircleMoreLogo.displayName = "MessageCircleMoreLogo";

export const MessageCircleMoreLogoMetadata = {
  id: "message-circle-more",
  baseId: "message-circle-more",
  variant: "default",
  name: "Message Circle More",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MessageCircleMoreLogo;
