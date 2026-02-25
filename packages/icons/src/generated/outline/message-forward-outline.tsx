/**
 * Auto-generated logo component: Message Forward Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MessageForwardOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MessageForwardOutlineLogo = React.forwardRef<SVGSVGElement, MessageForwardOutlineLogoProps>(
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
      <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12" />
  <path d="M13 8l3 3l-3 3" />
  <path d="M16 11h-8" />
    </svg>
  )
);

MessageForwardOutlineLogo.displayName = "MessageForwardOutlineLogo";

export const MessageForwardOutlineLogoMetadata = {
  id: "message-forward-outline",
  baseId: "message-forward-outline",
  variant: "default",
  name: "Message Forward Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MessageForwardOutlineLogo;
