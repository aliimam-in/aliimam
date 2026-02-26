/**
 * Auto-generated logo component: Madagascar (symbols)
 * Category: flags
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MadagascarSymbolsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const MadagascarSymbols = React.forwardRef<SVGSVGElement, MadagascarSymbolsProps>(
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
      <path d="M27 4H12V16H31V8C31 5.791 29.209 4 27 4Z" fill="#E65143"/>
<path d="M12 15V28H27C29.209 28 31 26.209 31 24V15H12Z" fill="#3A8343"/>
<path d="M5 4H13V28H5C2.792 28 1 26.208 1 24V8C1 5.792 2.792 4 5 4Z" fill="white"/>
    </svg>
  )
);

MadagascarSymbols.displayName = "MadagascarSymbols";

export const MadagascarSymbolsMetadata = {
  id: "Madagascar_symbols",
  baseId: "Madagascar",
  variant: "symbols",
  name: "Madagascar",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default MadagascarSymbols;
