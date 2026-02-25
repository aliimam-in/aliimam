/**
 * Auto-generated logo component: Mail (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MailFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MailFilledLogo = React.forwardRef<SVGSVGElement, MailFilledLogoProps>(
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
      <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
  <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />
    </svg>
  )
);

MailFilledLogo.displayName = "MailFilledLogo";

export const MailFilledLogoMetadata = {
  id: "mail_filled",
  baseId: "mail",
  variant: "filled",
  name: "Mail",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MailFilledLogo;
