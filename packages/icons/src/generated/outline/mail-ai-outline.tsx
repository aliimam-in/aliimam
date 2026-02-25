/**
 * Auto-generated logo component: Mail Ai Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MailAiOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MailAiOutlineLogo = React.forwardRef<SVGSVGElement, MailAiOutlineLogoProps>(
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
      <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4" />
  <path d="M3 7l8 5.345m4 -1.345l6 -4" />
  <path d="M14 21v-4a2 2 0 1 1 4 0v4" />
  <path d="M14 19h4" />
  <path d="M21 15v6" />
    </svg>
  )
);

MailAiOutlineLogo.displayName = "MailAiOutlineLogo";

export const MailAiOutlineLogoMetadata = {
  id: "mail-ai-outline",
  baseId: "mail-ai-outline",
  variant: "default",
  name: "Mail Ai Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MailAiOutlineLogo;
