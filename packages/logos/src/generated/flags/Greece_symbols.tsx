/**
 * Auto-generated logo component: Greece (symbols)
 * Category: flags
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GreeceSymbolsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const GreeceSymbols = React.forwardRef<SVGSVGElement, GreeceSymbolsProps>(
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
<path d="M1.24402 6.67H30.756C30.206 5.118 28.74 4 27 4H5.00002C3.26002 4 1.79402 5.118 1.24402 6.67Z" fill="#295CAB"/>
<path d="M1 9.34009H31V12.0101H1V9.34009Z" fill="#295CAB"/>
<path d="M1 14.6799H31V17.3499H1V14.6799Z" fill="#295CAB"/>
<path d="M1 20.02H31V22.69H1V20.02Z" fill="#295CAB"/>
<path d="M1.25299 25.3601C1.81099 26.8961 3.27099 28.0001 4.99999 28.0001H27C28.729 28.0001 30.188 26.8961 30.747 25.3601H1.25299Z" fill="#295CAB"/>
<path d="M14.35 4H5C2.791 4 1 5.791 1 8V17.35H14.35V4Z" fill="#295CAB"/>
<path d="M1 9.34009H14.35V12.0101H1V9.34009Z" fill="white"/>
<path d="M9.01001 4V17.35H6.34001L6.34001 4H9.01001Z" fill="white"/>
    </svg>
  )
);

GreeceSymbols.displayName = "GreeceSymbols";

export const GreeceSymbolsMetadata = {
  id: "Greece_symbols",
  baseId: "Greece",
  variant: "symbols",
  name: "Greece",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default GreeceSymbols;
