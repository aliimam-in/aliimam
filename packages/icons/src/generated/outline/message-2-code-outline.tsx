/**
 * Auto-generated logo component: Message 2 Code Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Message2CodeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Message2CodeOutlineLogo = React.forwardRef<SVGSVGElement, Message2CodeOutlineLogoProps>(
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
  <path d="M20 21l2 -2l-2 -2" />
  <path d="M17 17l-2 2l2 2" />
    </svg>
  )
);

Message2CodeOutlineLogo.displayName = "Message2CodeOutlineLogo";

export const Message2CodeOutlineLogoMetadata = {
  id: "message-2-code-outline",
  baseId: "message-2-code-outline",
  variant: "default",
  name: "Message 2 Code Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Message2CodeOutlineLogo;
