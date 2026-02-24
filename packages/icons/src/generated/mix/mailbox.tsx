/**
 * Auto-generated logo component: Mailbox (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MailboxLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MailboxLogo = React.forwardRef<SVGSVGElement, MailboxLogoProps>(
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
      <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
  <polyline points="15,9 18,9 18,11" />
  <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2" />
  <line x1="6" x2="7" y1="10" y2="10" />
    </svg>
  )
);

MailboxLogo.displayName = "MailboxLogo";

export const MailboxLogoMetadata = {
  id: "mailbox",
  baseId: "mailbox",
  variant: "default",
  name: "Mailbox",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MailboxLogo;
