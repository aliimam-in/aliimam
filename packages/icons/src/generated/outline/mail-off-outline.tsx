/**
 * Auto-generated logo component: Mail Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MailOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MailOffOutlineLogo = React.forwardRef<SVGSVGElement, MailOffOutlineLogoProps>(
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
      <path d="M9 5h10a2 2 0 0 1 2 2v10m-2 2h-14a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2" />
  <path d="M3 7l9 6l.565 -.377m2.435 -1.623l6 -4" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

MailOffOutlineLogo.displayName = "MailOffOutlineLogo";

export const MailOffOutlineLogoMetadata = {
  id: "mail-off-outline",
  baseId: "mail-off-outline",
  variant: "default",
  name: "Mail Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MailOffOutlineLogo;
