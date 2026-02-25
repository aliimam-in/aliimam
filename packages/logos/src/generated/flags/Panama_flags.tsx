/**
 * Auto-generated logo component: Panama (flags)
 * Category: flags
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PanamaFlagsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const PanamaFlags = React.forwardRef<SVGSVGElement, PanamaFlagsProps>(
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
      <path d="M5 4C2.791 4 1 5.791 1 8V16H16V4H5Z" fill="white"/>
<path d="M31 8C31 5.791 29.209 4 27 4H16V16H31V8Z" fill="#C92D25"/>
<path d="M5 28C2.791 28 1 26.209 1 24V16H16V28H5Z" fill="#081D53"/>
<path d="M31 24C31 26.209 29.209 28 27 28H16V16H31V24Z" fill="white"/>
<path d="M8.812 6.6709L7.986 9.2139H5.312L7.476 10.7859L6.649 13.3289L8.812 11.7569L10.976 13.3289L10.149 10.7859L12.312 9.2139H9.639L8.812 6.6709Z" fill="#081D53"/>
<path d="M22.937 17.9839L22.111 20.5269H19.437L21.601 22.0979L20.774 24.6409L22.937 23.0699L25.101 24.6409L24.274 22.0979L26.437 20.5269H23.764L22.937 17.9839Z" fill="#C92D25"/>
    </svg>
  )
);

PanamaFlags.displayName = "PanamaFlags";

export const PanamaFlagsMetadata = {
  id: "Panama_flags",
  baseId: "Panama",
  variant: "flags",
  name: "Panama",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default PanamaFlags;
