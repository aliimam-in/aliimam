/**
 * Auto-generated logo component: Message Circle Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MessageCircleCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MessageCircleCheckOutlineLogo = React.forwardRef<SVGSVGElement, MessageCircleCheckOutlineLogoProps>(
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
      <path d="M11.042 19.933a9.798 9.798 0 0 1 -3.342 -.933l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c2.127 1.814 3.052 4.36 2.694 6.808" />
  <path d="M15 19l2 2l4 -4" />
    </svg>
  )
);

MessageCircleCheckOutlineLogo.displayName = "MessageCircleCheckOutlineLogo";

export const MessageCircleCheckOutlineLogoMetadata = {
  id: "message-circle-check-outline",
  baseId: "message-circle-check-outline",
  variant: "default",
  name: "Message Circle Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MessageCircleCheckOutlineLogo;
