/**
 * Auto-generated logo component: Jordan (symbols)
 * Category: flags
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface JordanSymbolsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const JordanSymbols = React.forwardRef<SVGSVGElement, JordanSymbolsProps>(
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
      <path d="M1 11H31V21H1V11Z" fill="white"/>
<path d="M5 4H27C29.208 4 31 5.792 31 8V12H1V8C1 5.792 2.792 4 5 4Z" />
<path d="M27 28L5 28C2.792 28 1 26.208 1 24V20L31 20V24C31 26.208 29.208 28 27 28Z" fill="#357942"/>
<path d="M2.316 26.947L16 16L2.316 5.05298C1.513 5.78498 1 6.82898 1 7.99998V24C1 25.172 1.513 26.216 2.316 26.947Z" fill="#BE2A2C"/>
<path d="M6.78703 13.2759L6.16603 14.8529L4.54903 14.3589L5.39303 15.8249L3.99103 16.7809L5.67203 17.0359L5.54503 18.7249L6.78803 17.5779L8.03903 18.7249L7.91203 17.0359L9.58503 16.7809L8.19103 15.8249L9.03503 14.3589L7.41803 14.8529L6.78903 13.2759H6.78703Z" fill="white"/>
    </svg>
  )
);

JordanSymbols.displayName = "JordanSymbols";

export const JordanSymbolsMetadata = {
  id: "Jordan_symbols",
  baseId: "Jordan",
  variant: "symbols",
  name: "Jordan",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default JordanSymbols;
