/**
 * Auto-generated logo component: Trinidad Tobago (flags)
 * Category: flags
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TrinidadTobagoFlagsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const TrinidadTobagoFlags = React.forwardRef<SVGSVGElement, TrinidadTobagoFlagsProps>(
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
      <path d="M27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V8C31 5.79086 29.2091 4 27 4Z" fill="#C93039"/>
<path d="M29.926 26.711L11 4H5.00001C3.84101 4 2.80501 4.501 2.07401 5.289L21 28H27C28.159 28 29.195 27.499 29.926 26.711Z" fill="white"/>
<path d="M9.69202 4H5.00001C4.20001 4 3.45901 4.241 2.83401 4.645L22.328 28H27C27.806 28 28.552 27.757 29.18 27.347L9.69202 4Z" fill="black"/>
    </svg>
  )
);

TrinidadTobagoFlags.displayName = "TrinidadTobagoFlags";

export const TrinidadTobagoFlagsMetadata = {
  id: "Trinidad-Tobago_flags",
  baseId: "Trinidad-Tobago",
  variant: "flags",
  name: "Trinidad Tobago",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default TrinidadTobagoFlags;
