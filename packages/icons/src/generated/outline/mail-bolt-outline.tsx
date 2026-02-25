/**
 * Auto-generated logo component: Mail Bolt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MailBoltOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MailBoltOutlineLogo = React.forwardRef<SVGSVGElement, MailBoltOutlineLogoProps>(
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
      <path d="M13 19h-8a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5" />
  <path d="M3 7l9 6l9 -6" />
  <path d="M19 16l-2 3h4l-2 3" />
    </svg>
  )
);

MailBoltOutlineLogo.displayName = "MailBoltOutlineLogo";

export const MailBoltOutlineLogoMetadata = {
  id: "mail-bolt-outline",
  baseId: "mail-bolt-outline",
  variant: "default",
  name: "Mail Bolt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MailBoltOutlineLogo;
