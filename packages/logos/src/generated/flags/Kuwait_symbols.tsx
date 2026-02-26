/**
 * Auto-generated logo component: Kuwait (symbols)
 * Category: flags
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface KuwaitSymbolsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const KuwaitSymbols = React.forwardRef<SVGSVGElement, KuwaitSymbolsProps>(
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
<path d="M5 4H27C29.208 4 31 5.792 31 8V12H1V8C1 5.792 2.792 4 5 4Z" fill="#357942"/>
<path d="M27 28L5 28C2.792 28 1 26.208 1 24V20L31 20V24C31 26.208 29.208 28 27 28Z" fill="#BE2A2C"/>
<path d="M11 12L2.316 5.05298C1.513 5.78498 1 6.82898 1 7.99998V24C1 25.172 1.513 26.216 2.316 26.947L11 20V12Z" />
    </svg>
  )
);

KuwaitSymbols.displayName = "KuwaitSymbols";

export const KuwaitSymbolsMetadata = {
  id: "Kuwait_symbols",
  baseId: "Kuwait",
  variant: "symbols",
  name: "Kuwait",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default KuwaitSymbols;
