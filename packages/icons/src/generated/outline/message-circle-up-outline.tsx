/**
 * Auto-generated logo component: Message Circle Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MessageCircleUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MessageCircleUpOutlineLogo = React.forwardRef<SVGSVGElement, MessageCircleUpOutlineLogoProps>(
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
      <path d="M12.004 19.98a9.869 9.869 0 0 1 -4.304 -.98l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.994 1.701 2.932 4.045 2.746 6.349" />
  <path d="M19 22v-6" />
  <path d="M22 19l-3 -3l-3 3" />
    </svg>
  )
);

MessageCircleUpOutlineLogo.displayName = "MessageCircleUpOutlineLogo";

export const MessageCircleUpOutlineLogoMetadata = {
  id: "message-circle-up-outline",
  baseId: "message-circle-up-outline",
  variant: "default",
  name: "Message Circle Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MessageCircleUpOutlineLogo;
