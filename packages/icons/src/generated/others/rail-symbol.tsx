/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RailSymbolProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const RailSymbol = React.forwardRef<SVGSVGElement, RailSymbolProps>(
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
      <path d="M5 15h14" />
  <path d="M5 9h14" />
  <path d="m14 20-5-5 6-6-5-5" />
    </svg>
  )
);
RailSymbol.displayName = "RailSymbol";
export const RailSymbolMetadata = { 
  id: "rail-symbol", 
  baseId: "rail-symbol", 
  variant: "default", 
  name: "Rail Symbol", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default RailSymbol;
