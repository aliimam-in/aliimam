/**
 * Auto-generated logo component: Message User Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MessageUserOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MessageUserOutlineLogo = React.forwardRef<SVGSVGElement, MessageUserOutlineLogoProps>(
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
      <path d="M13 18l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" />
  <path d="M17 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M22 22a2 2 0 0 0 -2 -2h-2a2 2 0 0 0 -2 2" />
    </svg>
  )
);

MessageUserOutlineLogo.displayName = "MessageUserOutlineLogo";

export const MessageUserOutlineLogoMetadata = {
  id: "message-user-outline",
  baseId: "message-user-outline",
  variant: "default",
  name: "Message User Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MessageUserOutlineLogo;
