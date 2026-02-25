/**
 * Auto-generated logo component: Northen Ireland (flags)
 * Category: flags
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NorthenIrelandFlagsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const NorthenIrelandFlags = React.forwardRef<SVGSVGElement, NorthenIrelandFlagsProps>(
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
<path d="M27.7097 4.07153L16 13.4392L4.29033 4.07153C2.84273 4.33183 1.67993 5.37013 1.22253 6.73873L12.799 15.9999L1.22253 25.2612C1.68003 26.6299 2.84273 27.6682 4.29033 27.9284L16 18.5607L27.7097 27.9284C29.1573 27.6681 30.3201 26.6298 30.7775 25.2612L19.201 16L30.7775 6.73883C30.32 5.37013 29.1573 4.33173 27.7097 4.07153Z" fill="#CA0A2B"/>
    </svg>
  )
);

NorthenIrelandFlags.displayName = "NorthenIrelandFlags";

export const NorthenIrelandFlagsMetadata = {
  id: "Northen-Ireland_flags",
  baseId: "Northen-Ireland",
  variant: "flags",
  name: "Northen Ireland",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default NorthenIrelandFlags;
