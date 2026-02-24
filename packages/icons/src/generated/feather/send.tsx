/**
 * Auto-generated logo component: Send (default)
 * Category: feather
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
      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  )
);

SendLogo.displayName = "SendLogo";

export const SendLogoMetadata = {
  id: "send",
  baseId: "send",
  variant: "default",
  name: "Send",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SendLogo;
