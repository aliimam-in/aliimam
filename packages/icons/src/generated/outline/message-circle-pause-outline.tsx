/**
 * Auto-generated logo component: Message Circle Pause Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MessageCirclePauseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MessageCirclePauseOutlineLogo = React.forwardRef<SVGSVGElement, MessageCirclePauseOutlineLogoProps>(
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
      <path d="M12.989 19.932a9.93 9.93 0 0 1 -5.289 -.932l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c2.131 1.818 3.056 4.37 2.692 6.824" />
  <path d="M17 17v5" />
  <path d="M21 17v5" />
    </svg>
  )
);

MessageCirclePauseOutlineLogo.displayName = "MessageCirclePauseOutlineLogo";

export const MessageCirclePauseOutlineLogoMetadata = {
  id: "message-circle-pause-outline",
  baseId: "message-circle-pause-outline",
  variant: "default",
  name: "Message Circle Pause Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MessageCirclePauseOutlineLogo;
