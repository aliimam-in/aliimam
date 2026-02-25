/**
 * Auto-generated logo component: Mail Exclamation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MailExclamationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MailExclamationOutlineLogo = React.forwardRef<SVGSVGElement, MailExclamationOutlineLogoProps>(
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
      <path d="M15 19h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5" />
  <path d="M3 7l9 6l9 -6" />
  <path d="M19 16v3" />
  <path d="M19 22v.01" />
    </svg>
  )
);

MailExclamationOutlineLogo.displayName = "MailExclamationOutlineLogo";

export const MailExclamationOutlineLogoMetadata = {
  id: "mail-exclamation-outline",
  baseId: "mail-exclamation-outline",
  variant: "default",
  name: "Mail Exclamation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MailExclamationOutlineLogo;
