/**
 * Auto-generated logo component: Message Circle Share Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MessageCircleShareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MessageCircleShareOutlineLogo = React.forwardRef<SVGSVGElement, MessageCircleShareOutlineLogoProps>(
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
      <path d="M12.58 19.963a9.906 9.906 0 0 1 -4.88 -.963l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c2.13 1.817 3.055 4.368 2.692 6.82" />
  <path d="M16 22l5 -5" />
  <path d="M21 21.5v-4.5h-4.5" />
    </svg>
  )
);

MessageCircleShareOutlineLogo.displayName = "MessageCircleShareOutlineLogo";

export const MessageCircleShareOutlineLogoMetadata = {
  id: "message-circle-share-outline",
  baseId: "message-circle-share-outline",
  variant: "default",
  name: "Message Circle Share Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MessageCircleShareOutlineLogo;
