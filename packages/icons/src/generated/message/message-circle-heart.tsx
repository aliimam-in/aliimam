/**
 * Auto-generated logo component: Message Circle Heart (default)
 * Category: message
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MessageCircleHeartLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MessageCircleHeartLogo = React.forwardRef<SVGSVGElement, MessageCircleHeartLogoProps>(
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
  <path d="M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 5.004 2.224 3 3 0 0 1-.832 2.083l-3.447 3.62a1 1 0 0 1-1.45-.001z" />
    </svg>
  )
);

MessageCircleHeartLogo.displayName = "MessageCircleHeartLogo";

export const MessageCircleHeartLogoMetadata = {
  id: "message-circle-heart",
  baseId: "message-circle-heart",
  variant: "default",
  name: "Message Circle Heart",
  category: "message",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MessageCircleHeartLogo;
