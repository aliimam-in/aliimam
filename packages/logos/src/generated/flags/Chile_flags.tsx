/**
 * Auto-generated logo component: Chile (flags)
 * Category: flags
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChileFlagsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const ChileFlags = React.forwardRef<SVGSVGElement, ChileFlagsProps>(
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
      <path d="M1 24C1 26.209 2.791 28 5 28H27C29.209 28 31 26.209 31 24V15H1V24Z" fill="#C73A29"/>
<path d="M27 4H5C2.791 4 1 5.791 1 8V16H31V8C31 5.791 29.209 4 27 4Z" fill="white"/>
<path d="M5 4H13V16H1V8C1 5.792 2.792 4 5 4Z" fill="#1435A1"/>
<path d="M8.14602 10.674L10.001 9.326H7.70802L7.00002 7.146L6.29202 9.326H3.99902L5.85402 10.674L5.14502 12.854L7.00002 11.507L8.85502 12.854L8.14602 10.674Z" fill="white"/>
    </svg>
  )
);

ChileFlags.displayName = "ChileFlags";

export const ChileFlagsMetadata = {
  id: "Chile_flags",
  baseId: "Chile",
  variant: "flags",
  name: "Chile",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default ChileFlags;
