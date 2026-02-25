/**
 * Auto-generated logo component: Phone Call Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PhoneCallFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PhoneCallFilledLogo = React.forwardRef<SVGSVGElement, PhoneCallFilledLogoProps>(
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
      <path d="M9.928 3.629l2 5a1 1 0 0 1 -.414 1.228l-1.67 1.003a9.9 9.9 0 0 0 3.296 3.297l1.003 -1.671a1 1 0 0 1 1.228 -.414l5 2a1 1 0 0 1 .629 .928v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 3 -3h4a1 1 0 0 1 .928 .629" />
  <path d="M18 9a1 1 0 0 1 -2 0a1 1 0 0 0 -1 -1a1 1 0 0 1 0 -2a3 3 0 0 1 3 3" />
  <path d="M22 9a1 1 0 0 1 -2 0a5 5 0 0 0 -5 -5a1 1 0 0 1 0 -2a7 7 0 0 1 7 7" />
    </svg>
  )
);

PhoneCallFilledLogo.displayName = "PhoneCallFilledLogo";

export const PhoneCallFilledLogoMetadata = {
  id: "phone-call-filled",
  baseId: "phone-call-filled",
  variant: "default",
  name: "Phone Call Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PhoneCallFilledLogo;
