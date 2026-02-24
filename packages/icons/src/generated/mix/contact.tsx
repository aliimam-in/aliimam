/**
 * Auto-generated logo component: Contact (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ContactLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ContactLogo = React.forwardRef<SVGSVGElement, ContactLogoProps>(
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
      <path d="M16 2v2" />
  <path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
  <path d="M8 2v2" />
  <circle cx="12" cy="11" r="3" />
  <rect x="3" y="4" width="18" height="18" rx="2" />
    </svg>
  )
);

ContactLogo.displayName = "ContactLogo";

export const ContactLogoMetadata = {
  id: "contact",
  baseId: "contact",
  variant: "default",
  name: "Contact",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ContactLogo;
