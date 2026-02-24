/**
 * Auto-generated logo component: Message Circle (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MessageCircleLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MessageCircleLogo = React.forwardRef<SVGSVGElement, MessageCircleLogoProps>(
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
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    </svg>
  )
);

MessageCircleLogo.displayName = "MessageCircleLogo";

export const MessageCircleLogoMetadata = {
  id: "message-circle",
  baseId: "message-circle",
  variant: "default",
  name: "Message Circle",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MessageCircleLogo;
