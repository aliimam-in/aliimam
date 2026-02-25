/**
 * Auto-generated logo component: Phone Incoming Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PhoneIncomingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PhoneIncomingOutlineLogo = React.forwardRef<SVGSVGElement, PhoneIncomingOutlineLogoProps>(
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
      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
  <path d="M15 9l5 -5" />
  <path d="M15 5l0 4l4 0" />
    </svg>
  )
);

PhoneIncomingOutlineLogo.displayName = "PhoneIncomingOutlineLogo";

export const PhoneIncomingOutlineLogoMetadata = {
  id: "phone-incoming-outline",
  baseId: "phone-incoming-outline",
  variant: "default",
  name: "Phone Incoming Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PhoneIncomingOutlineLogo;
