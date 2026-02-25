/**
 * Auto-generated logo component: Mail (default)
 * Category: mail
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MailLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MailLogo = React.forwardRef<SVGSVGElement, MailLogoProps>(
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
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
  <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  )
);

MailLogo.displayName = "MailLogo";

export const MailLogoMetadata = {
  id: "mail",
  baseId: "mail",
  variant: "default",
  name: "Mail",
  category: "mail",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MailLogo;
