/**
 * Auto-generated logo component: Send Horizontal (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SendHorizontalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SendHorizontalLogo = React.forwardRef<SVGSVGElement, SendHorizontalLogoProps>(
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
      <path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" />
  <path d="M6 12h16" />
    </svg>
  )
);

SendHorizontalLogo.displayName = "SendHorizontalLogo";

export const SendHorizontalLogoMetadata = {
  id: "send-horizontal",
  baseId: "send-horizontal",
  variant: "default",
  name: "Send Horizontal",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SendHorizontalLogo;
