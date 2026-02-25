/**
 * Auto-generated logo component: Message Circle Dollar Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MessageCircleDollarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MessageCircleDollarOutlineLogo = React.forwardRef<SVGSVGElement, MessageCircleDollarOutlineLogoProps>(
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
      <path d="M13.16 19.914a9.94 9.94 0 0 1 -5.46 -.914l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.384 1.181 2.26 2.672 2.603 4.243" />
  <path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
  <path d="M19 21v1m0 -8v1" />
    </svg>
  )
);

MessageCircleDollarOutlineLogo.displayName = "MessageCircleDollarOutlineLogo";

export const MessageCircleDollarOutlineLogoMetadata = {
  id: "message-circle-dollar-outline",
  baseId: "message-circle-dollar-outline",
  variant: "default",
  name: "Message Circle Dollar Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MessageCircleDollarOutlineLogo;
