/**
 * Auto-generated logo component: Finland (flags)
 * Category: flags
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FinlandFlagsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const FinlandFlags = React.forwardRef<SVGSVGElement, FinlandFlagsProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V8C31 5.79086 29.2091 4 27 4Z" fill="white"/>
<path d="M31 14H15V4H11V14H1V18H11V28H15V18H31V14Z" fill="#0E2A69"/>
    </svg>
  )
);

FinlandFlags.displayName = "FinlandFlags";

export const FinlandFlagsMetadata = {
  id: "Finland_flags",
  baseId: "Finland",
  variant: "flags",
  name: "Finland",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default FinlandFlags;
