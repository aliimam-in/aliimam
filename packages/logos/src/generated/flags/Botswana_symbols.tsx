/**
 * Auto-generated logo component: Botswana (symbols)
 * Category: flags
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BotswanaSymbolsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const BotswanaSymbols = React.forwardRef<SVGSVGElement, BotswanaSymbolsProps>(
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
      <path d="M1 13H31V19H1V13Z" fill="currentColor"/>
<path d="M5 4H27C29.208 4 31 5.792 31 8V14H1V8C1 5.792 2.792 4 5 4Z" fill="#7BA9D0"/>
<path d="M27 28L5 28C2.792 28 1 26.208 1 24V18L31 18V24C31 26.208 29.208 28 27 28Z" fill="#7BA9D0"/>
<path d="M1 12H31V14H1V12Z" fill="white"/>
<path d="M1 18H31V20H1V18Z" fill="white"/>
    </svg>
  )
);

BotswanaSymbols.displayName = "BotswanaSymbols";

export const BotswanaSymbolsMetadata = {
  id: "Botswana_symbols",
  baseId: "Botswana",
  variant: "symbols",
  name: "Botswana",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default BotswanaSymbols;
