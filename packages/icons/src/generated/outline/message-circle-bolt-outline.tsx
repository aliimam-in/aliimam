/**
 * Auto-generated logo component: Message Circle Bolt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MessageCircleBoltOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MessageCircleBoltOutlineLogo = React.forwardRef<SVGSVGElement, MessageCircleBoltOutlineLogoProps>(
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
      <path d="M13.038 19.927a9.933 9.933 0 0 1 -5.338 -.927l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.993 1.7 2.93 4.043 2.746 6.346" />
  <path d="M19 16l-2 3h4l-2 3" />
    </svg>
  )
);

MessageCircleBoltOutlineLogo.displayName = "MessageCircleBoltOutlineLogo";

export const MessageCircleBoltOutlineLogoMetadata = {
  id: "message-circle-bolt-outline",
  baseId: "message-circle-bolt-outline",
  variant: "default",
  name: "Message Circle Bolt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MessageCircleBoltOutlineLogo;
