/**
 * Auto-generated logo component: Mail Forward Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MailForwardOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MailForwardOutlineLogo = React.forwardRef<SVGSVGElement, MailForwardOutlineLogoProps>(
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
      <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
  <path d="M3 6l9 6l9 -6" />
  <path d="M15 18h6" />
  <path d="M18 15l3 3l-3 3" />
    </svg>
  )
);

MailForwardOutlineLogo.displayName = "MailForwardOutlineLogo";

export const MailForwardOutlineLogoMetadata = {
  id: "mail-forward-outline",
  baseId: "mail-forward-outline",
  variant: "default",
  name: "Mail Forward Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MailForwardOutlineLogo;
