/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FishSymbolProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FishSymbol = React.forwardRef<SVGSVGElement, FishSymbolProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M2 16s9-15 20-4C11 23 2 8 2 8" />
    </svg>
  )
);
FishSymbol.displayName = "FishSymbol";
export const FishSymbolMetadata = { 
  id: "fish-symbol", 
  baseId: "fish-symbol", 
  variant: "default", 
  name: "Fish Symbol", 
  category: "animal", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FishSymbol;
