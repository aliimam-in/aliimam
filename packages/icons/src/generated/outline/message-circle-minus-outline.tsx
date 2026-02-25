/**
 * Auto-generated logo component: Message Circle Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MessageCircleMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MessageCircleMinusOutlineLogo = React.forwardRef<SVGSVGElement, MessageCircleMinusOutlineLogoProps>(
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
      <path d="M12.023 19.98a9.87 9.87 0 0 1 -4.323 -.98l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c2.718 2.319 3.473 5.832 2.096 8.811" />
  <path d="M16 19h6" />
    </svg>
  )
);

MessageCircleMinusOutlineLogo.displayName = "MessageCircleMinusOutlineLogo";

export const MessageCircleMinusOutlineLogoMetadata = {
  id: "message-circle-minus-outline",
  baseId: "message-circle-minus-outline",
  variant: "default",
  name: "Message Circle Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MessageCircleMinusOutlineLogo;
