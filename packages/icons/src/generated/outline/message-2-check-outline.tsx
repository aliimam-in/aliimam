/**
 * Auto-generated logo component: Message 2 Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Message2CheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Message2CheckOutlineLogo = React.forwardRef<SVGSVGElement, Message2CheckOutlineLogoProps>(
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
  <path d="M12 21l-1 -1l-2 -2h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6" />
  <path d="M15 19l2 2l4 -4" />
    </svg>
  )
);

Message2CheckOutlineLogo.displayName = "Message2CheckOutlineLogo";

export const Message2CheckOutlineLogoMetadata = {
  id: "message-2-check-outline",
  baseId: "message-2-check-outline",
  variant: "default",
  name: "Message 2 Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Message2CheckOutlineLogo;
