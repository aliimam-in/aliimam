/**
 * Auto-generated logo component: Message 2 Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Message2PlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Message2PlusOutlineLogo = React.forwardRef<SVGSVGElement, Message2PlusOutlineLogoProps>(
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
      <path d="M8 9h8" />
  <path d="M8 13h6" />
  <path d="M12.5 20.5l-.5 .5l-3 -3h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

Message2PlusOutlineLogo.displayName = "Message2PlusOutlineLogo";

export const Message2PlusOutlineLogoMetadata = {
  id: "message-2-plus-outline",
  baseId: "message-2-plus-outline",
  variant: "default",
  name: "Message 2 Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Message2PlusOutlineLogo;
