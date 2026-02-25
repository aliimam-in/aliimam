/**
 * Auto-generated logo component: Message Circle Code Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MessageCircleCodeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MessageCircleCodeOutlineLogo = React.forwardRef<SVGSVGElement, MessageCircleCodeOutlineLogoProps>(
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
      <path d="M11.036 19.933a9.798 9.798 0 0 1 -3.336 -.933l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c2.128 1.815 3.053 4.361 2.694 6.81" />
  <path d="M20 21l2 -2l-2 -2" />
  <path d="M17 17l-2 2l2 2" />
    </svg>
  )
);

MessageCircleCodeOutlineLogo.displayName = "MessageCircleCodeOutlineLogo";

export const MessageCircleCodeOutlineLogoMetadata = {
  id: "message-circle-code-outline",
  baseId: "message-circle-code-outline",
  variant: "default",
  name: "Message Circle Code Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MessageCircleCodeOutlineLogo;
