/**
 * Auto-generated logo component: England (flags)
 * Category: flags
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EnglandFlagsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const EnglandFlags = React.forwardRef<SVGSVGElement, EnglandFlagsProps>(
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
<path d="M31 14H18V4H14V14H1V18H14V28H18V18H31V14Z" fill="#BE2A2A"/>
    </svg>
  )
);

EnglandFlags.displayName = "EnglandFlags";

export const EnglandFlagsMetadata = {
  id: "England_flags",
  baseId: "England",
  variant: "flags",
  name: "England",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default EnglandFlags;
