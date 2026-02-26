/**
 * Auto-generated logo component: Italy (symbols)
 * Category: flags
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ItalySymbolsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const ItalySymbols = React.forwardRef<SVGSVGElement, ItalySymbolsProps>(
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
      <path d="M10 4H22V28H10V4Z" fill="white"/>
<path d="M5 4H11V28H5C2.792 28 1 26.208 1 24V8C1 5.792 2.792 4 5 4Z" fill="#41914D"/>
<path d="M27 28H21L21 4H27C29.208 4 31 5.792 31 8L31 24C31 26.208 29.208 28 27 28Z" fill="#BF393B"/>
    </svg>
  )
);

ItalySymbols.displayName = "ItalySymbols";

export const ItalySymbolsMetadata = {
  id: "Italy_symbols",
  baseId: "Italy",
  variant: "symbols",
  name: "Italy",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default ItalySymbols;
