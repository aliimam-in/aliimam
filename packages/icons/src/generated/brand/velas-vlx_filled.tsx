/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface VelasVlxFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const VelasVlxFilled = React.forwardRef<SVGSVGElement, VelasVlxFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M21 3.1499H3C2.59 3.1499 2.25 3.4899 2.25 3.8999C2.25 4.3099 2.59 4.6499 3 4.6499H21C21.41 4.6499 21.75 4.3099 21.75 3.8999C21.75 3.4899 21.41 3.1499 21 3.1499Z" fill="currentColor"/>
<path d="M4.0399 6.23999H19.9699C20.8499 6.23999 21.3799 7.20999 20.8999 7.94999L12.9399 20.34C12.4999 21.02 11.5099 21.02 11.0699 20.34L3.10988 7.94999C2.62988 7.20999 3.1599 6.23999 4.0399 6.23999Z" fill="currentColor"/>
    </svg>
  )
);
VelasVlxFilled.displayName = "VelasVlxFilled";
export const VelasVlxFilledMetadata = { 
  id: "velas-vlx_filled", 
  baseId: "velas-vlx", 
  variant: "filled", 
  name: "Velas Vlx", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default VelasVlxFilled;
