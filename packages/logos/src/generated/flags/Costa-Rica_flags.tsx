/**
 * Auto-generated logo component: Costa Rica (flags)
 * Category: flags
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CostaRicaFlagsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const CostaRicaFlags = React.forwardRef<SVGSVGElement, CostaRicaFlagsProps>(
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
      <path d="M5 4H27C29.208 4 31 5.792 31 8V9H1V8C1 5.792 2.792 4 5 4Z" fill="#030A85"/>
<path d="M27 28L5 28C2.792 28 1 26.208 1 24V23L31 23V24C31 26.208 29.208 28 27 28Z" fill="#030A85"/>
<path d="M1 8H31V13H1V8Z" fill="white"/>
<path d="M1 19H31V24H1V19Z" fill="white"/>
<path d="M1 12H31V20H1V12Z" fill="#C93927"/>
    </svg>
  )
);

CostaRicaFlags.displayName = "CostaRicaFlags";

export const CostaRicaFlagsMetadata = {
  id: "Costa-Rica_flags",
  baseId: "Costa-Rica",
  variant: "flags",
  name: "Costa Rica",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default CostaRicaFlags;
