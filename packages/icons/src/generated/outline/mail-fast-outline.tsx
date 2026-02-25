/**
 * Auto-generated logo component: Mail Fast Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MailFastOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MailFastOutlineLogo = React.forwardRef<SVGSVGElement, MailFastOutlineLogoProps>(
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
      <path d="M3 7h3" />
  <path d="M3 11h2" />
  <path d="M9.02 8.801l-.6 6a2 2 0 0 0 1.99 2.199h7.98a2 2 0 0 0 1.99 -1.801l.6 -6a2 2 0 0 0 -1.99 -2.199h-7.98a2 2 0 0 0 -1.99 1.801" />
  <path d="M9.8 7.5l2.982 3.28a3 3 0 0 0 4.238 .202l3.28 -2.982" />
    </svg>
  )
);

MailFastOutlineLogo.displayName = "MailFastOutlineLogo";

export const MailFastOutlineLogoMetadata = {
  id: "mail-fast-outline",
  baseId: "mail-fast-outline",
  variant: "default",
  name: "Mail Fast Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MailFastOutlineLogo;
