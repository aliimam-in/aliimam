/**
 * Auto-generated logo component: Estonia (flags)
 * Category: flags
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EstoniaFlagsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const EstoniaFlags = React.forwardRef<SVGSVGElement, EstoniaFlagsProps>(
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
      <path d="M1 11H31V21H1V11Z" fill="black"/>
<path d="M5 4H27C29.208 4 31 5.792 31 8V12H1V8C1 5.792 2.792 4 5 4Z" fill="#3271C9"/>
<path d="M27 28L5 28C2.792 28 1 26.208 1 24V20L31 20V24C31 26.208 29.208 28 27 28Z" fill="white"/>
    </svg>
  )
);

EstoniaFlags.displayName = "EstoniaFlags";

export const EstoniaFlagsMetadata = {
  id: "Estonia_flags",
  baseId: "Estonia",
  variant: "flags",
  name: "Estonia",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default EstoniaFlags;
