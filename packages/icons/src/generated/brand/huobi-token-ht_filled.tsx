/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HuobiTokenHtFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HuobiTokenHtFilled = React.forwardRef<SVGSVGElement, HuobiTokenHtFilledProps>(
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
      <path d="M16.1599 10C16.1599 10 16.0099 11 12.9099 15C9.9999 18.77 14.2099 21.64 14.7099 21.97C14.7399 21.99 14.7699 21.99 14.8099 21.97C15.4899 21.55 23.0599 16.68 16.1599 10Z" fill="currentColor"/>
<path d="M13.76 7.79006C13.76 5.49006 12.86 3.39006 11.96 2.19006C11.66 1.89006 11.16 1.99006 11.06 2.39006C10.66 3.89006 9.46001 7.09006 6.56001 10.8901C2.86001 15.6901 6.26002 20.8901 9.76002 21.8901C11.66 22.3901 9.26003 20.8901 8.96003 17.7901C8.66003 13.8901 13.76 10.9901 13.76 7.79006Z" fill="currentColor"/>
    </svg>
  )
);
HuobiTokenHtFilled.displayName = "HuobiTokenHtFilled";
export const HuobiTokenHtFilledMetadata = { 
  id: "huobi-token-ht_filled", 
  baseId: "huobi-token-ht", 
  variant: "filled", 
  name: "Huobi Token Ht", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default HuobiTokenHtFilled;
