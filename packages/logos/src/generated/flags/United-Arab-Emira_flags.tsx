/**
 * Auto-generated logo component: United Arab Emira (flags)
 * Category: flags
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UnitedArabEmiraFlagsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const UnitedArabEmiraFlags = React.forwardRef<SVGSVGElement, UnitedArabEmiraFlagsProps>(
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
      <path d="M5 4H11V28H5C2.792 28 1 26.208 1 24V8C1 5.792 2.792 4 5 4Z" fill="#EA3323"/>
<path d="M10 20V28H27C29.209 28 31 26.209 31 24V20H10Z" fill="black"/>
<path d="M10 11H31V21H10V11Z" fill="white"/>
<path d="M27 4H10V12H31V8C31 5.791 29.209 4 27 4Z" fill="#317234"/>
    </svg>
  )
);

UnitedArabEmiraFlags.displayName = "UnitedArabEmiraFlags";

export const UnitedArabEmiraFlagsMetadata = {
  id: "United-Arab-Emira_flags",
  baseId: "United-Arab-Emira",
  variant: "flags",
  name: "United Arab Emira",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default UnitedArabEmiraFlags;
