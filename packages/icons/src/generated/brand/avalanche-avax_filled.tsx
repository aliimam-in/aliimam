/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AvalancheAvaxFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AvalancheAvaxFilled = React.forwardRef<SVGSVGElement, AvalancheAvaxFilledProps>(
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
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10.72 15.41C10.39 15.94 9.80999 16.26 9.17999 16.26H6.44C6.09 16.26 5.86999 15.88 6.04999 15.58L11.66 5.97C11.82 5.69 12.22 5.67 12.41 5.93L13.97 8.02C14.42 8.62 14.45 9.43 14.06 10.07L10.72 15.41ZM17.55 16.26H13.71C13.36 16.26 13.14 15.88 13.32 15.57L15.24 12.37C15.42 12.08 15.84 12.08 16.02 12.37L17.94 15.57C18.12 15.87 17.9 16.26 17.55 16.26Z" fill="currentColor"/>
    </svg>
  )
);
AvalancheAvaxFilled.displayName = "AvalancheAvaxFilled";
export const AvalancheAvaxFilledMetadata = { 
  id: "avalanche-avax_filled", 
  baseId: "avalanche-avax", 
  variant: "filled", 
  name: "Avalanche Avax", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AvalancheAvaxFilled;
