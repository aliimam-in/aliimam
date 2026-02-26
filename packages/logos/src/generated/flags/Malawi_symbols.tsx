/**
 * Auto-generated logo component: Malawi (symbols)
 * Category: flags
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MalawiSymbolsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const MalawiSymbols = React.forwardRef<SVGSVGElement, MalawiSymbolsProps>(
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
      <path d="M1 11H31V21H1V11Z" fill="#BE2A2C"/>
<path d="M5 4H27C29.208 4 31 5.792 31 8V12H1V8C1 5.792 2.792 4 5 4Z" fill="currentColor"/>
<path d="M27 28L5 28C2.792 28 1 26.208 1 24V20L31 20V24C31 26.208 29.208 28 27 28Z" fill="#539D42"/>
<path d="M20.578 10C19.806 8.236 18.049 7 16 7C13.951 7 12.194 8.236 11.422 10H20.578Z" fill="#BE2A2C"/>
<path d="M13.027 16C13.86 16.62 14.881 17 16 17C17.119 17 18.14 16.62 18.973 16H13.027Z" fill="#BE2A2C"/>
    </svg>
  )
);

MalawiSymbols.displayName = "MalawiSymbols";

export const MalawiSymbolsMetadata = {
  id: "Malawi_symbols",
  baseId: "Malawi",
  variant: "symbols",
  name: "Malawi",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default MalawiSymbols;
