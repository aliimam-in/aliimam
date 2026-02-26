/**
 * Auto-generated logo component: Aaland Islands (symbols)
 * Category: flags
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AalandIslandsSymbolsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const AalandIslandsSymbols = React.forwardRef<SVGSVGElement, AalandIslandsSymbolsProps>(
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
      <path d="M27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V8C31 5.79086 29.2091 4 27 4Z" fill="#0464AE"/>
<path d="M31 12H17V4H9V12H1V20H9V28H17V20H31V12Z" fill="#FFD500"/>
<path d="M31 14H15V4H11V14H1V18H11V28H15V18H31V14Z" fill="#DB070D"/>
    </svg>
  )
);

AalandIslandsSymbols.displayName = "AalandIslandsSymbols";

export const AalandIslandsSymbolsMetadata = {
  id: "Aaland-Islands_symbols",
  baseId: "Aaland-Islands",
  variant: "symbols",
  name: "Aaland Islands",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default AalandIslandsSymbols;
