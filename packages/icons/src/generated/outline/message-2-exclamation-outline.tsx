/**
 * Auto-generated logo component: Message 2 Exclamation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Message2ExclamationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Message2ExclamationOutlineLogo = React.forwardRef<SVGSVGElement, Message2ExclamationOutlineLogoProps>(
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
  <path d="M15 18l-3 3l-3 -3h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5" />
  <path d="M19 16v3" />
  <path d="M19 22v.01" />
    </svg>
  )
);

Message2ExclamationOutlineLogo.displayName = "Message2ExclamationOutlineLogo";

export const Message2ExclamationOutlineLogoMetadata = {
  id: "message-2-exclamation-outline",
  baseId: "message-2-exclamation-outline",
  variant: "default",
  name: "Message 2 Exclamation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Message2ExclamationOutlineLogo;
