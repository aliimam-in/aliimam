/**
 * Auto-generated logo component: Mail (default)
 * Category: feather
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
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
    </svg>
  )
);

MailLogo.displayName = "MailLogo";

export const MailLogoMetadata = {
  id: "mail",
  baseId: "mail",
  variant: "default",
  name: "Mail",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MailLogo;
