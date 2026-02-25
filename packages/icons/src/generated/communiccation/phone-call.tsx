/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PhoneCallProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PhoneCall = React.forwardRef<SVGSVGElement, PhoneCallProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M13 2a9 9 0 0 1 9 9" />
  <path d="M13 6a5 5 0 0 1 5 5" />
  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </svg>
  )
);
PhoneCall.displayName = "PhoneCall";
export const PhoneCallMetadata = { 
  id: "phone-call", 
  baseId: "phone-call", 
  variant: "default", 
  name: "Phone Call", 
  category: "communiccation", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PhoneCall;
