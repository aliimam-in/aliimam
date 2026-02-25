/**
 * Auto-generated logo component: Phone Incoming (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PhoneIncomingLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PhoneIncomingLogo = React.forwardRef<SVGSVGElement, PhoneIncomingLogoProps>(
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
      <path d="M16 2v6h6" />
  <path d="m22 2-6 6" />
  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </svg>
  )
);

PhoneIncomingLogo.displayName = "PhoneIncomingLogo";

export const PhoneIncomingLogoMetadata = {
  id: "phone-incoming",
  baseId: "phone-incoming",
  variant: "default",
  name: "Phone Incoming",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PhoneIncomingLogo;
