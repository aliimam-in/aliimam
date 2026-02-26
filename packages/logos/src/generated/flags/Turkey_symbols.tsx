/**
 * Auto-generated logo component: Turkey (symbols)
 * Category: flags
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TurkeySymbolsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const TurkeySymbols = React.forwardRef<SVGSVGElement, TurkeySymbolsProps>(
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
      <path d="M27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V8C31 5.79086 29.2091 4 27 4Z" fill="#D12D24"/>
<path d="M19.807 16L21 14.358L19.069 14.985L17.876 13.342V15.373L15.945 16L17.876 16.627V18.658L19.069 17.015L21 17.642L19.807 16Z" fill="white"/>
<path d="M15.953 19.325C14.116 20.975 11.29 20.825 9.63901 18.988C7.98801 17.151 8.13901 14.325 9.97601 12.674C11.813 11.024 14.639 11.174 16.29 13.011C15.848 12.312 15.255 11.719 14.556 11.277C11.948 9.62702 8.49601 10.403 6.84501 13.011C5.19501 15.619 5.97101 19.071 8.57901 20.722C11.187 22.372 14.639 21.596 16.29 18.988C16.184 19.106 16.071 19.219 15.953 19.325Z" fill="white"/>
    </svg>
  )
);

TurkeySymbols.displayName = "TurkeySymbols";

export const TurkeySymbolsMetadata = {
  id: "Turkey_symbols",
  baseId: "Turkey",
  variant: "symbols",
  name: "Turkey",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default TurkeySymbols;
