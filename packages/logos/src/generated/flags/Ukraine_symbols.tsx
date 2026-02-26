/**
 * Auto-generated logo component: Ukraine (symbols)
 * Category: flags
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UkraineSymbolsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const UkraineSymbols = React.forwardRef<SVGSVGElement, UkraineSymbolsProps>(
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
      <path d="M31 8C31 5.791 29.209 4 27 4H5C2.791 4 1 5.791 1 8V17H31V8Z" fill="#2455B2"/>
<path d="M5 28H27C29.209 28 31 26.209 31 24V16H1V24C1 26.209 2.791 28 5 28Z" fill="#F9DA49"/>
    </svg>
  )
);

UkraineSymbols.displayName = "UkraineSymbols";

export const UkraineSymbolsMetadata = {
  id: "Ukraine_symbols",
  baseId: "Ukraine",
  variant: "symbols",
  name: "Ukraine",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default UkraineSymbols;
