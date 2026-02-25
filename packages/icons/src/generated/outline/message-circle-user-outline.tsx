/**
 * Auto-generated logo component: Message Circle User Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MessageCircleUserOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MessageCircleUserOutlineLogo = React.forwardRef<SVGSVGElement, MessageCircleUserOutlineLogoProps>(
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
      <path d="M17 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M22 22a2 2 0 0 0 -2 -2h-2a2 2 0 0 0 -2 2" />
  <path d="M12.454 19.97a9.9 9.9 0 0 1 -4.754 -.97l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.667 1.423 2.596 3.294 2.747 5.216" />
    </svg>
  )
);

MessageCircleUserOutlineLogo.displayName = "MessageCircleUserOutlineLogo";

export const MessageCircleUserOutlineLogoMetadata = {
  id: "message-circle-user-outline",
  baseId: "message-circle-user-outline",
  variant: "default",
  name: "Message Circle User Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MessageCircleUserOutlineLogo;
