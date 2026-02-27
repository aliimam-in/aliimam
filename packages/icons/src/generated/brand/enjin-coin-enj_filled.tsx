/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface EnjinCoinEnjFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const EnjinCoinEnjFilled = React.forwardRef<SVGSVGElement, EnjinCoinEnjFilledProps>(
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
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.75 11.25C16.16 11.25 16.5 11.59 16.5 12C16.5 12.41 16.16 12.75 15.75 12.75H8.5V13C8.5 14.24 9.51 15.25 10.75 15.25H15.75C16.16 15.25 16.5 15.59 16.5 16C16.5 16.41 16.16 16.75 15.75 16.75H10.75C8.68 16.75 7 15.07 7 13V11C7 8.93 8.68 7.25 10.75 7.25H15.75C16.16 7.25 16.5 7.59 16.5 8C16.5 8.41 16.16 8.75 15.75 8.75H10.75C9.51 8.75 8.5 9.76 8.5 11V11.25H15.75Z" fill="currentColor"/>
    </svg>
  )
);
EnjinCoinEnjFilled.displayName = "EnjinCoinEnjFilled";
export const EnjinCoinEnjFilledMetadata = { 
  id: "enjin-coin-enj_filled", 
  baseId: "enjin-coin-enj", 
  variant: "filled", 
  name: "Enjin Coin Enj", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default EnjinCoinEnjFilled;
