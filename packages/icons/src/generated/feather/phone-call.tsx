/**
 * Auto-generated logo component: Phone Call (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PhoneCallLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PhoneCallLogo = React.forwardRef<SVGSVGElement, PhoneCallLogoProps>(
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
      <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
);

PhoneCallLogo.displayName = "PhoneCallLogo";

export const PhoneCallLogoMetadata = {
  id: "phone-call",
  baseId: "phone-call",
  variant: "default",
  name: "Phone Call",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PhoneCallLogo;
