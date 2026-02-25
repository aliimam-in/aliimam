/**
 * Auto-generated logo component: Mailbox Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MailboxOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MailboxOutlineLogo = React.forwardRef<SVGSVGElement, MailboxOutlineLogoProps>(
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
      <path d="M10 21v-6.5a3.5 3.5 0 0 0 -7 0v6.5h18v-6a4 4 0 0 0 -4 -4h-10.5" />
  <path d="M12 11v-8h4l2 2l-2 2h-4" />
  <path d="M6 15h1" />
    </svg>
  )
);

MailboxOutlineLogo.displayName = "MailboxOutlineLogo";

export const MailboxOutlineLogoMetadata = {
  id: "mailbox-outline",
  baseId: "mailbox-outline",
  variant: "default",
  name: "Mailbox Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MailboxOutlineLogo;
