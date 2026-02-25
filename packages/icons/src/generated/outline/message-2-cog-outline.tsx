/**
 * Auto-generated logo component: Message 2 Cog Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Message2CogOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Message2CogOutlineLogo = React.forwardRef<SVGSVGElement, Message2CogOutlineLogoProps>(
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
  <path d="M12 21l-3 -3h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5" />
  <path d="M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M19.001 15.5v1.5" />
  <path d="M19.001 21v1.5" />
  <path d="M22.032 17.25l-1.299 .75" />
  <path d="M17.27 20l-1.3 .75" />
  <path d="M15.97 17.25l1.3 .75" />
  <path d="M20.733 20l1.3 .75" />
    </svg>
  )
);

Message2CogOutlineLogo.displayName = "Message2CogOutlineLogo";

export const Message2CogOutlineLogoMetadata = {
  id: "message-2-cog-outline",
  baseId: "message-2-cog-outline",
  variant: "default",
  name: "Message 2 Cog Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Message2CogOutlineLogo;
