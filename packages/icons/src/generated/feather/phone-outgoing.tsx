/**
 * Auto-generated logo component: Phone Outgoing (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PhoneOutgoingLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PhoneOutgoingLogo = React.forwardRef<SVGSVGElement, PhoneOutgoingLogoProps>(
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
      <polyline points="23 7 23 1 17 1"/><line x1="16" y1="8" x2="23" y2="1"/><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
);

PhoneOutgoingLogo.displayName = "PhoneOutgoingLogo";

export const PhoneOutgoingLogoMetadata = {
  id: "phone-outgoing",
  baseId: "phone-outgoing",
  variant: "default",
  name: "Phone Outgoing",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PhoneOutgoingLogo;
