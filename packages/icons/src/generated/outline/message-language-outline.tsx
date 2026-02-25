/**
 * Auto-generated logo component: Message Language Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MessageLanguageOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MessageLanguageOutlineLogo = React.forwardRef<SVGSVGElement, MessageLanguageOutlineLogoProps>(
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
      <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
  <path d="M10 14v-4a2 2 0 1 1 4 0v4" />
  <path d="M14 12h-4" />
    </svg>
  )
);

MessageLanguageOutlineLogo.displayName = "MessageLanguageOutlineLogo";

export const MessageLanguageOutlineLogoMetadata = {
  id: "message-language-outline",
  baseId: "message-language-outline",
  variant: "default",
  name: "Message Language Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MessageLanguageOutlineLogo;
