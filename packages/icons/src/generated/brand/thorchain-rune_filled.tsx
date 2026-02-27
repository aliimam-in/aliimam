/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ThorchainRuneFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ThorchainRuneFilled = React.forwardRef<SVGSVGElement, ThorchainRuneFilledProps>(
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
      <path d="M16.3799 17.57L6.07988 21.91C5.00988 22.36 4.07986 21.03 4.86986 20.18L12.6799 11.7L16.7298 15.82C17.2698 16.36 17.0899 17.28 16.3799 17.57Z" fill="currentColor"/>
<path d="M19.17 3.76992L12.68 11.6999L8.63003 7.59992C8.09003 7.04992 8.27001 6.12992 8.98001 5.83992L17.92 2.08992C18.96 1.64992 19.89 2.89992 19.17 3.76992Z" fill="currentColor"/>
    </svg>
  )
);
ThorchainRuneFilled.displayName = "ThorchainRuneFilled";
export const ThorchainRuneFilledMetadata = { 
  id: "thorchain-rune_filled", 
  baseId: "thorchain-rune", 
  variant: "filled", 
  name: "Thorchain Rune", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ThorchainRuneFilled;
