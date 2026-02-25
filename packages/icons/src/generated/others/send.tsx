/**
 * Auto-generated logo component: Send (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SendLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SendLogo = React.forwardRef<SVGSVGElement, SendLogoProps>(
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
      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
  <path d="m21.854 2.147-10.94 10.939" />
    </svg>
  )
);

SendLogo.displayName = "SendLogo";

export const SendLogoMetadata = {
  id: "send",
  baseId: "send",
  variant: "default",
  name: "Send",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SendLogo;
