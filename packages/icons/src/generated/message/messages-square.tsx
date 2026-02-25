/**
 * Auto-generated logo component: Messages Square (default)
 * Category: message
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MessagesSquareLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MessagesSquareLogo = React.forwardRef<SVGSVGElement, MessagesSquareLogoProps>(
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
      <path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  <path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1" />
    </svg>
  )
);

MessagesSquareLogo.displayName = "MessagesSquareLogo";

export const MessagesSquareLogoMetadata = {
  id: "messages-square",
  baseId: "messages-square",
  variant: "default",
  name: "Messages Square",
  category: "message",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MessagesSquareLogo;
