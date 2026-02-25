/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CoinYenFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CoinYenFilled = React.forwardRef<SVGSVGElement, CoinYenFilledProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.445 3.828a1 1 0 0 0 -1.387 .277l-2.168 3.251l-2.168 -3.25a1 1 0 0 0 -1.286 -.337l-.1 .059a1 1 0 0 0 -.278 1.387l1.63 2.445h-.798a1 1 0 0 0 -.993 .883l-.007 .117a1 1 0 0 0 1 1h2v1h-2a1 1 0 0 0 -.993 .883l-.007 .117a1 1 0 0 0 1 1h2v1a1 1 0 0 0 .883 .993l.117 .007l.117 -.007a1 1 0 0 0 .883 -.993v-1h2a1 1 0 0 0 .993 -.883l.007 -.117a1 1 0 0 0 -1 -1h-2v-1h2a1 1 0 0 0 .993 -.883l.007 -.117a1 1 0 0 0 -1 -1h-.799l1.631 -2.445a1 1 0 0 0 -.184 -1.317l-.093 -.07z" />
    </svg>
  )
);
CoinYenFilled.displayName = "CoinYenFilled";
export const CoinYenFilledMetadata = { 
  id: "coin-yen_filled", 
  baseId: "coin-yen", 
  variant: "filled", 
  name: "Coin Yen", 
  category: "finance", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CoinYenFilled;
