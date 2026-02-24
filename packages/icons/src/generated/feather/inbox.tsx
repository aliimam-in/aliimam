/**
 * Auto-generated logo component: Inbox (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface InboxLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const InboxLogo = React.forwardRef<SVGSVGElement, InboxLogoProps>(
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
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
    </svg>
  )
);

InboxLogo.displayName = "InboxLogo";

export const InboxLogoMetadata = {
  id: "inbox",
  baseId: "inbox",
  variant: "default",
  name: "Inbox",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default InboxLogo;
