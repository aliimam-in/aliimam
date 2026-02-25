/**
 * Auto-generated logo component: Phone Forwarded (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PhoneForwardedLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PhoneForwardedLogo = React.forwardRef<SVGSVGElement, PhoneForwardedLogoProps>(
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
      <path d="M14 6h8" />
  <path d="m18 2 4 4-4 4" />
  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </svg>
  )
);

PhoneForwardedLogo.displayName = "PhoneForwardedLogo";

export const PhoneForwardedLogoMetadata = {
  id: "phone-forwarded",
  baseId: "phone-forwarded",
  variant: "default",
  name: "Phone Forwarded",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PhoneForwardedLogo;
