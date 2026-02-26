/**
 * Auto-generated logo component: Vietnam (symbols)
 * Category: flags
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VietnamSymbolsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const VietnamSymbols = React.forwardRef<SVGSVGElement, VietnamSymbolsProps>(
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
      <path d="M27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V8C31 5.79086 29.2091 4 27 4Z" fill="#C93728"/>
<path d="M18.008 16.366L21.257 14.006H17.241L16 10.186L14.759 14.006H10.743L13.992 16.366L12.751 20.186L16 17.825L19.249 20.186L18.008 16.366Z" fill="#FFFF55"/>
    </svg>
  )
);

VietnamSymbols.displayName = "VietnamSymbols";

export const VietnamSymbolsMetadata = {
  id: "Vietnam_symbols",
  baseId: "Vietnam",
  variant: "symbols",
  name: "Vietnam",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default VietnamSymbols;
