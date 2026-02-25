/**
 * Auto-generated logo component: Mail Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MailDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MailDownOutlineLogo = React.forwardRef<SVGSVGElement, MailDownOutlineLogoProps>(
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
      <path d="M12 19h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5" />
  <path d="M19 16v6" />
  <path d="M22 19l-3 3l-3 -3" />
  <path d="M3 7l9 6l9 -6" />
    </svg>
  )
);

MailDownOutlineLogo.displayName = "MailDownOutlineLogo";

export const MailDownOutlineLogoMetadata = {
  id: "mail-down-outline",
  baseId: "mail-down-outline",
  variant: "default",
  name: "Mail Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MailDownOutlineLogo;
