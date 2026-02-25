/**
 * Auto-generated logo component: Mail Pause Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MailPauseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MailPauseOutlineLogo = React.forwardRef<SVGSVGElement, MailPauseOutlineLogoProps>(
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
      <path d="M13 19h-8a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6" />
  <path d="M3 7l9 6l9 -6" />
  <path d="M17 17v5" />
  <path d="M21 17v5" />
    </svg>
  )
);

MailPauseOutlineLogo.displayName = "MailPauseOutlineLogo";

export const MailPauseOutlineLogoMetadata = {
  id: "mail-pause-outline",
  baseId: "mail-pause-outline",
  variant: "default",
  name: "Mail Pause Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MailPauseOutlineLogo;
