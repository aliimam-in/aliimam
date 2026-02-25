/**
 * Auto-generated logo component: Message Circle Exclamation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MessageCircleExclamationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MessageCircleExclamationOutlineLogo = React.forwardRef<SVGSVGElement, MessageCircleExclamationOutlineLogoProps>(
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
      <path d="M15.02 19.52c-2.34 .736 -5 .606 -7.32 -.52l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.96 1.671 2.898 3.963 2.755 6.227" />
  <path d="M19 16v3" />
  <path d="M19 22v.01" />
    </svg>
  )
);

MessageCircleExclamationOutlineLogo.displayName = "MessageCircleExclamationOutlineLogo";

export const MessageCircleExclamationOutlineLogoMetadata = {
  id: "message-circle-exclamation-outline",
  baseId: "message-circle-exclamation-outline",
  variant: "default",
  name: "Message Circle Exclamation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MessageCircleExclamationOutlineLogo;
