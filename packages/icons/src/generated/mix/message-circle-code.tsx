/**
 * Auto-generated logo component: Message Circle Code (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MessageCircleCodeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MessageCircleCodeLogo = React.forwardRef<SVGSVGElement, MessageCircleCodeLogoProps>(
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
      <path d="m10 9-3 3 3 3" />
  <path d="m14 15 3-3-3-3" />
  <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
    </svg>
  )
);

MessageCircleCodeLogo.displayName = "MessageCircleCodeLogo";

export const MessageCircleCodeLogoMetadata = {
  id: "message-circle-code",
  baseId: "message-circle-code",
  variant: "default",
  name: "Message Circle Code",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MessageCircleCodeLogo;
