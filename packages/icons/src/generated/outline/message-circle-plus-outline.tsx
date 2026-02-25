/**
 * Auto-generated logo component: Message Circle Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MessageCirclePlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MessageCirclePlusOutlineLogo = React.forwardRef<SVGSVGElement, MessageCirclePlusOutlineLogoProps>(
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
      <path d="M12.007 19.98a9.869 9.869 0 0 1 -4.307 -.98l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.992 1.7 2.93 4.04 2.747 6.34" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

MessageCirclePlusOutlineLogo.displayName = "MessageCirclePlusOutlineLogo";

export const MessageCirclePlusOutlineLogoMetadata = {
  id: "message-circle-plus-outline",
  baseId: "message-circle-plus-outline",
  variant: "default",
  name: "Message Circle Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MessageCirclePlusOutlineLogo;
