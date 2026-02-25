/**
 * Auto-generated logo component: Message Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MessageOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MessageOffOutlineLogo = React.forwardRef<SVGSVGElement, MessageOffOutlineLogoProps>(
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
  <path d="M8 4h10a3 3 0 0 1 3 3v8c0 .577 -.163 1.116 -.445 1.573m-2.555 1.427h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8c0 -1.085 .576 -2.036 1.439 -2.562" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

MessageOffOutlineLogo.displayName = "MessageOffOutlineLogo";

export const MessageOffOutlineLogoMetadata = {
  id: "message-off-outline",
  baseId: "message-off-outline",
  variant: "default",
  name: "Message Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MessageOffOutlineLogo;
