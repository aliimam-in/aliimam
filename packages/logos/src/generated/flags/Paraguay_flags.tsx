/**
 * Auto-generated logo component: Paraguay (flags)
 * Category: flags
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ParaguayFlagsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const ParaguayFlags = React.forwardRef<SVGSVGElement, ParaguayFlagsProps>(
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
      <path d="M1 11H31V21H1V11Z" fill="white"/>
<path d="M5 4H27C29.208 4 31 5.792 31 8V12H1V8C1 5.792 2.792 4 5 4Z" fill="#C53A28"/>
<path d="M27 28L5 28C2.792 28 1 26.208 1 24V20L31 20V24C31 26.208 29.208 28 27 28Z" fill="#1334A3"/>
<path d="M16 19.25C14.208 19.25 12.75 17.792 12.75 16C12.75 14.208 14.208 12.75 16 12.75C17.792 12.75 19.25 14.208 19.25 16C19.25 17.792 17.792 19.25 16 19.25ZM16 13.25C14.483 13.25 13.25 14.483 13.25 16C13.25 17.517 14.483 18.75 16 18.75C17.517 18.75 18.75 17.517 18.75 16C18.75 14.483 17.517 13.25 16 13.25Z" fill="black"/>
    </svg>
  )
);

ParaguayFlags.displayName = "ParaguayFlags";

export const ParaguayFlagsMetadata = {
  id: "Paraguay_flags",
  baseId: "Paraguay",
  variant: "flags",
  name: "Paraguay",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default ParaguayFlags;
