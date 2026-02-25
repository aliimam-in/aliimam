/**
 * Auto-generated logo component: Phone Ringing Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PhoneRingingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PhoneRingingOutlineLogo = React.forwardRef<SVGSVGElement, PhoneRingingOutlineLogoProps>(
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
      <path d="M20 4l-2 2" />
  <path d="M22 10.5l-2.5 -.5" />
  <path d="M13.5 2l.5 2.5" />
  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2c-8.072 -.49 -14.51 -6.928 -15 -15a2 2 0 0 1 2 -2" />
    </svg>
  )
);

PhoneRingingOutlineLogo.displayName = "PhoneRingingOutlineLogo";

export const PhoneRingingOutlineLogoMetadata = {
  id: "phone-ringing-outline",
  baseId: "phone-ringing-outline",
  variant: "default",
  name: "Phone Ringing Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PhoneRingingOutlineLogo;
