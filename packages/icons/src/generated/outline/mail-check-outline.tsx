/**
 * Auto-generated logo component: Mail Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MailCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MailCheckOutlineLogo = React.forwardRef<SVGSVGElement, MailCheckOutlineLogoProps>(
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
      <path d="M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6" />
  <path d="M3 7l9 6l9 -6" />
  <path d="M15 19l2 2l4 -4" />
    </svg>
  )
);

MailCheckOutlineLogo.displayName = "MailCheckOutlineLogo";

export const MailCheckOutlineLogoMetadata = {
  id: "mail-check-outline",
  baseId: "mail-check-outline",
  variant: "default",
  name: "Mail Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MailCheckOutlineLogo;
