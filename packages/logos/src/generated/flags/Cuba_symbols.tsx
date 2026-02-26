/**
 * Auto-generated logo component: Cuba (symbols)
 * Category: flags
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CubaSymbolsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const CubaSymbols = React.forwardRef<SVGSVGElement, CubaSymbolsProps>(
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
      <path d="M5 4H27C29.208 4 31 5.792 31 8V10H1V8C1 5.792 2.792 4 5 4Z" fill="#0C258B"/>
<path d="M27 28L5 28C2.792 28 1 26.208 1 24V22L31 22V24C31 26.208 29.208 28 27 28Z" fill="#0C258B"/>
<path d="M1 18H31V23H1V18Z" fill="white"/>
<path d="M1 9H31V14H1V9Z" fill="white"/>
<path d="M1 13.5H31V18.5H1V13.5Z" fill="#0C258B"/>
<path d="M2.316 26.947L16 16L2.316 5.05298C1.513 5.78498 1 6.82898 1 7.99998V24C1 25.172 1.513 26.216 2.316 26.947Z" fill="#BC2B20"/>
<path d="M8.016 16.628L10.318 14.956H7.473L6.594 12.25L5.715 14.956H2.87L5.171 16.628L4.292 19.333L6.594 17.661L8.895 19.333L8.016 16.628Z" fill="white"/>
    </svg>
  )
);

CubaSymbols.displayName = "CubaSymbols";

export const CubaSymbolsMetadata = {
  id: "Cuba_symbols",
  baseId: "Cuba",
  variant: "symbols",
  name: "Cuba",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default CubaSymbols;
