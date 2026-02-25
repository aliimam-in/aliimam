/**
 * Auto-generated logo component: Monaco (flags)
 * Category: flags
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MonacoFlagsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const MonacoFlags = React.forwardRef<SVGSVGElement, MonacoFlagsProps>(
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
      <path d="M31 8C31 5.791 29.209 4 27 4H5C2.791 4 1 5.791 1 8V17H31V8Z" fill="#BE2A2C"/>
<path d="M5 28H27C29.209 28 31 26.209 31 24V16H1V24C1 26.209 2.791 28 5 28Z" fill="white"/>
    </svg>
  )
);

MonacoFlags.displayName = "MonacoFlags";

export const MonacoFlagsMetadata = {
  id: "Monaco_flags",
  baseId: "Monaco",
  variant: "flags",
  name: "Monaco",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default MonacoFlags;
