/**
 * Auto-generated logo component: North Korea (symbols)
 * Category: flags
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NorthKoreaSymbolsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const NorthKoreaSymbols = React.forwardRef<SVGSVGElement, NorthKoreaSymbolsProps>(
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
      <path d="M1 8H31V24H1V8Z" fill="#DA3530"/>
<path d="M5 4H27C29.208 4 31 5.792 31 8V9H1V8C1 5.792 2.792 4 5 4Z" fill="#1F4D9E"/>
<path d="M27 28L5 28C2.792 28 1 26.208 1 24V23L31 23V24C31 26.208 29.208 28 27 28Z" fill="#1F4D9E"/>
<path d="M1 9H31V10H1V9Z" fill="white"/>
<path d="M1 22H31V23H1V22Z" fill="white"/>
<path d="M10.312 12C8.275 12 6.625 13.651 6.625 15.688C6.625 17.725 8.276 19.376 10.312 19.376C12.348 19.376 14 17.725 14 15.688C14 13.651 12.349 12 10.312 12ZM12.412 18.578L10.312 17.052L8.212 18.578L9.014 16.11L6.914 14.584H9.509L10.311 12.116L11.113 14.584H13.708L11.608 16.11L12.41 18.578H12.412Z" fill="white"/>
    </svg>
  )
);

NorthKoreaSymbols.displayName = "NorthKoreaSymbols";

export const NorthKoreaSymbolsMetadata = {
  id: "North-Korea_symbols",
  baseId: "North-Korea",
  variant: "symbols",
  name: "North Korea",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default NorthKoreaSymbols;
