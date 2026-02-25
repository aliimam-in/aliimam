/**
 * Auto-generated logo component: Mail Opened Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MailOpenedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MailOpenedOutlineLogo = React.forwardRef<SVGSVGElement, MailOpenedOutlineLogoProps>(
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
      <path d="M3 9l9 6l9 -6l-9 -6l-9 6" />
  <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
  <path d="M3 19l6 -6" />
  <path d="M15 13l6 6" />
    </svg>
  )
);

MailOpenedOutlineLogo.displayName = "MailOpenedOutlineLogo";

export const MailOpenedOutlineLogoMetadata = {
  id: "mail-opened-outline",
  baseId: "mail-opened-outline",
  variant: "default",
  name: "Mail Opened Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MailOpenedOutlineLogo;
