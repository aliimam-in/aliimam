/**
 * Auto-generated logo component: Message Circle Pin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MessageCirclePinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MessageCirclePinOutlineLogo = React.forwardRef<SVGSVGElement, MessageCirclePinOutlineLogoProps>(
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
      <path d="M12.337 19.974a9.891 9.891 0 0 1 -4.637 -.974l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.63 1.39 2.554 3.21 2.736 5.085" />
  <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879" />
  <path d="M19 18v.01" />
    </svg>
  )
);

MessageCirclePinOutlineLogo.displayName = "MessageCirclePinOutlineLogo";

export const MessageCirclePinOutlineLogoMetadata = {
  id: "message-circle-pin-outline",
  baseId: "message-circle-pin-outline",
  variant: "default",
  name: "Message Circle Pin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MessageCirclePinOutlineLogo;
