/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PhoneCallFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PhoneCallFilled = React.forwardRef<SVGSVGElement, PhoneCallFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
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
PhoneCallFilled.displayName = "PhoneCallFilled";
export const PhoneCallFilledMetadata = { 
  id: "phone-call_filled", 
  baseId: "phone-call", 
  variant: "filled", 
  name: "Phone Call", 
  category: "communiccation", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PhoneCallFilled;
