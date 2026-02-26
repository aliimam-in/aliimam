/**
 * Auto-generated logo component: Guernsey (symbols)
 * Category: flags
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GuernseySymbolsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const GuernseySymbols = React.forwardRef<SVGSVGElement, GuernseySymbolsProps>(
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
<path d="M31 13H19V4H13V13H1V19H13V28H19V19H31V13Z" fill="#BE2A2A"/>
<path d="M22 15H17V10L18 9H14L15 10V15H10L9 14V18L10 17H15V22L14 23H18L17 22V17H22L23 18V14L22 15Z" fill="#F5DF4C"/>
    </svg>
  )
);

GuernseySymbols.displayName = "GuernseySymbols";

export const GuernseySymbolsMetadata = {
  id: "Guernsey_symbols",
  baseId: "Guernsey",
  variant: "symbols",
  name: "Guernsey",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default GuernseySymbols;
