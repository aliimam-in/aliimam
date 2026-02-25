/**
 * Auto-generated logo component: Niger (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NigerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Niger = React.forwardRef<SVGSVGElement, NigerProps>(
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
      <path d="M1 11H31V21H1V11Z" fill="white" />
<path d="M5 4H27C29.208 4 31 5.792 31 8V12H1V8C1 5.792 2.792 4 5 4Z" fill="#D05B26" />
<path d="M27 28L5 28C2.792 28 1 26.208 1 24V20L31 20V24C31 26.208 29.208 28 27 28Z" fill="#50AF3F" />
<path d="M16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z" fill="#D05B26" />
    </svg>
  )
);

Niger.displayName = "Niger";

export const NigerMetadata = {
  id: "Niger",
  baseId: "Niger",
  variant: "default",
  name: "Niger",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default Niger;
