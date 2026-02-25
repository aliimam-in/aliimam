/**
 * Auto-generated logo component: Message Square Share (default)
 * Category: message
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MessageSquareShareLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MessageSquareShareLogo = React.forwardRef<SVGSVGElement, MessageSquareShareLogoProps>(
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
      <path d="M12 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4" />
  <path d="M16 3h6v6" />
  <path d="m16 9 6-6" />
    </svg>
  )
);

MessageSquareShareLogo.displayName = "MessageSquareShareLogo";

export const MessageSquareShareLogoMetadata = {
  id: "message-square-share",
  baseId: "message-square-share",
  variant: "default",
  name: "Message Square Share",
  category: "message",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MessageSquareShareLogo;
