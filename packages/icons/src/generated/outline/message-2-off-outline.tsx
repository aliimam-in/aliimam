/**
 * Auto-generated logo component: Message 2 Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Message2OffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Message2OffOutlineLogo = React.forwardRef<SVGSVGElement, Message2OffOutlineLogoProps>(
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
      <path d="M8 9h1m4 0h3" />
  <path d="M8 13h5" />
  <path d="M8 4h10a3 3 0 0 1 3 3v8c0 .57 -.16 1.104 -.436 1.558m-2.564 1.442h-3l-3 3l-3 -3h-3a3 3 0 0 1 -3 -3v-8c0 -1.084 .575 -2.034 1.437 -2.561" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

Message2OffOutlineLogo.displayName = "Message2OffOutlineLogo";

export const Message2OffOutlineLogoMetadata = {
  id: "message-2-off-outline",
  baseId: "message-2-off-outline",
  variant: "default",
  name: "Message 2 Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Message2OffOutlineLogo;
