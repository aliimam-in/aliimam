/**
 * Auto-generated logo component: Aruba (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArubaProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Aruba = React.forwardRef<SVGSVGElement, ArubaProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V8C31 5.79086 29.2091 4 27 4Z" fill="#4091DF" />
<path d="M31 18H1V20H31V18Z" fill="#FFD203" />
<path d="M31 22H1V24H31V22Z" fill="#FFD203" />
<path d="M7.23972 12.7031L3.24512 11.4717L7.23972 10.2402L8.47122 6.24512L9.70262 10.2402L13.6973 11.4717L9.70262 12.7031L8.47122 16.6973L7.23972 12.7031Z" fill="white" />
<path d="M8.4712 7.94248L9.30291 10.6395L11.9999 11.4712L9.30291 12.3029L8.4712 14.9999L7.6395 12.303L4.9425 11.4711L7.6395 10.6394L8.4712 7.94248Z" fill="#DB4647" />
    </svg>
  )
);

Aruba.displayName = "Aruba";

export const ArubaMetadata = {
  id: "Aruba",
  baseId: "Aruba",
  variant: "default",
  name: "Aruba",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default Aruba;
