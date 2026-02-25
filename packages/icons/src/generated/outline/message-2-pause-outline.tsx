/**
 * Auto-generated logo component: Message 2 Pause Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Message2PauseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Message2PauseOutlineLogo = React.forwardRef<SVGSVGElement, Message2PauseOutlineLogoProps>(
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
  <path d="M13 20l-1 1l-3 -3h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6" />
  <path d="M17 17v5" />
  <path d="M21 17v5" />
    </svg>
  )
);

Message2PauseOutlineLogo.displayName = "Message2PauseOutlineLogo";

export const Message2PauseOutlineLogoMetadata = {
  id: "message-2-pause-outline",
  baseId: "message-2-pause-outline",
  variant: "default",
  name: "Message 2 Pause Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Message2PauseOutlineLogo;
