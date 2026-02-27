/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ThorchainRuneRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ThorchainRuneRounded = React.forwardRef<SVGSVGElement, ThorchainRuneRoundedProps>(
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
      <path d="M12.7 11.7L16.8 15.8C17.3 16.4 17.1 17.3 16.4 17.6L6.10002 21.9C5.00002 22.4 4.10002 21 4.90002 20.2L12.7 11.7ZM12.7 11.7L8.60002 7.59995C8.10002 7.09995 8.30002 6.09995 9.00002 5.79995L17.9 2.09995C19 1.69995 19.9 2.89995 19.2 3.79995L12.7 11.7Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10"/>
    </svg>
  )
);
ThorchainRuneRounded.displayName = "ThorchainRuneRounded";
export const ThorchainRuneRoundedMetadata = { 
  id: "thorchain-rune_rounded", 
  baseId: "thorchain-rune", 
  variant: "rounded", 
  name: "Thorchain Rune", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ThorchainRuneRounded;
