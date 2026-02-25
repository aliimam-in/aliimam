/**
 * Auto-generated logo component: Message (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MessageFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MessageFilledLogo = React.forwardRef<SVGSVGElement, MessageFilledLogoProps>(
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
      <path d="M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-4.724l-4.762 2.857a1 1 0 0 1 -1.508 -.743l-.006 -.114v-2h-1a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-8a4 4 0 0 1 4 -4zm-4 9h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2m2 -4h-8a1 1 0 1 0 0 2h8a1 1 0 0 0 0 -2" />
    </svg>
  )
);

MessageFilledLogo.displayName = "MessageFilledLogo";

export const MessageFilledLogoMetadata = {
  id: "message_filled",
  baseId: "message",
  variant: "filled",
  name: "Message",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MessageFilledLogo;
