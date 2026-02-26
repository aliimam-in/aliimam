/**
 * Auto-generated logo component: Maldives (symbols)
 * Category: flags
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MaldivesSymbolsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const MaldivesSymbols = React.forwardRef<SVGSVGElement, MaldivesSymbolsProps>(
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
      <path d="M27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V8C31 5.79086 29.2091 4 27 4Z" fill="#C22B38"/>
<path d="M6 9H26V23H6V9Z" fill="#377D40"/>
<path d="M15.217 15.9999C15.217 14.2529 16.469 12.7989 18.125 12.4849C17.908 12.4439 17.683 12.4209 17.454 12.4209C15.477 12.4209 13.875 14.0229 13.875 15.9999C13.875 17.9769 15.477 19.5789 17.454 19.5789C17.683 19.5789 17.908 19.5569 18.125 19.5149C16.469 19.2009 15.217 17.7469 15.217 15.9999Z" fill="white"/>
    </svg>
  )
);

MaldivesSymbols.displayName = "MaldivesSymbols";

export const MaldivesSymbolsMetadata = {
  id: "Maldives_symbols",
  baseId: "Maldives",
  variant: "symbols",
  name: "Maldives",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default MaldivesSymbols;
