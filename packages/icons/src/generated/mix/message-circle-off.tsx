/**
 * Auto-generated logo component: Message Circle Off (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MessageCircleOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MessageCircleOffLogo = React.forwardRef<SVGSVGElement, MessageCircleOffLogoProps>(
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
      <path d="m2 2 20 20" />
  <path d="M4.93 4.929a10 10 0 0 0-1.938 11.412 2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 0 0 11.302-1.989" />
  <path d="M8.35 2.69A10 10 0 0 1 21.3 15.65" />
    </svg>
  )
);

MessageCircleOffLogo.displayName = "MessageCircleOffLogo";

export const MessageCircleOffLogoMetadata = {
  id: "message-circle-off",
  baseId: "message-circle-off",
  variant: "default",
  name: "Message Circle Off",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MessageCircleOffLogo;
