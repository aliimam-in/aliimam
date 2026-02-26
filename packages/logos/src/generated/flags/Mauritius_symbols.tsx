/**
 * Auto-generated logo component: Mauritius (symbols)
 * Category: flags
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MauritiusSymbolsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const MauritiusSymbols = React.forwardRef<SVGSVGElement, MauritiusSymbolsProps>(
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
      <path d="M1 24C1 26.209 2.791 28 5 28H27C29.209 28 31 26.209 31 24V21H1V24Z" fill="#4AA459"/>
<path d="M1 15H31V22H1V15Z" fill="#F8D849"/>
<path d="M27 4H5C2.791 4 1 5.791 1 8V11H31V8C31 5.791 29.209 4 27 4Z" fill="#D83B3F"/>
<path d="M1 10H31V16H1V10Z" fill="#151A69"/>
    </svg>
  )
);

MauritiusSymbols.displayName = "MauritiusSymbols";

export const MauritiusSymbolsMetadata = {
  id: "Mauritius_symbols",
  baseId: "Mauritius",
  variant: "symbols",
  name: "Mauritius",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default MauritiusSymbols;
