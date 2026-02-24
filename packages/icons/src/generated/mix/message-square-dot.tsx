/**
 * Auto-generated logo component: Message Square Dot (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MessageSquareDotLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MessageSquareDotLogo = React.forwardRef<SVGSVGElement, MessageSquareDotLogoProps>(
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
      <path d="M12.7 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4.7" />
  <circle cx="19" cy="6" r="3" />
    </svg>
  )
);

MessageSquareDotLogo.displayName = "MessageSquareDotLogo";

export const MessageSquareDotLogoMetadata = {
  id: "message-square-dot",
  baseId: "message-square-dot",
  variant: "default",
  name: "Message Square Dot",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MessageSquareDotLogo;
