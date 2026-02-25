/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PhoneFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PhoneFilled = React.forwardRef<SVGSVGElement, PhoneFilledProps>(
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
      <path d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z" />
    </svg>
  )
);
PhoneFilled.displayName = "PhoneFilled";
export const PhoneFilledMetadata = { 
  id: "phone_filled", 
  baseId: "phone", 
  variant: "filled", 
  name: "Phone", 
  category: "communiccation", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PhoneFilled;
