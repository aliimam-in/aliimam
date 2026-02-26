/**
 * Auto-generated logo component: Latvia (symbols)
 * Category: flags
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LatviaSymbolsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const LatviaSymbols = React.forwardRef<SVGSVGElement, LatviaSymbolsProps>(
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
      <path d="M1 12H31V20H1V12Z" fill="white"/>
<path d="M5 4H27C29.208 4 31 5.792 31 8V13H1V8C1 5.792 2.792 4 5 4Z" fill="#922A35"/>
<path d="M27 28L5 28C2.792 28 1 26.208 1 24V19L31 19V24C31 26.208 29.208 28 27 28Z" fill="#922A35"/>
    </svg>
  )
);

LatviaSymbols.displayName = "LatviaSymbols";

export const LatviaSymbolsMetadata = {
  id: "Latvia_symbols",
  baseId: "Latvia",
  variant: "symbols",
  name: "Latvia",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default LatviaSymbols;
