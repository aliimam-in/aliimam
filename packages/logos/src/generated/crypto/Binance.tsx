/**
 * Auto-generated logo component: Binance (default)
 * Category: crypto
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BinanceProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Binance = React.forwardRef<SVGSVGElement, BinanceProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <g clipPath="url(#clip0_2062_2927)">
<path d="M12.002 23.9383C18.5964 23.9383 23.9423 18.5925 23.9423 11.998C23.9423 5.4036 18.5964 0.0577393 12.002 0.0577393C5.4075 0.0577393 0.0616455 5.4036 0.0616455 11.998C0.0616455 18.5925 5.4075 23.9383 12.002 23.9383Z" />
<path fillRule="evenodd" clipRule="evenodd" d="M15.0987 13.2678L16.8999 15.0638L12.0036 19.9548L7.11264 15.0638L8.91377 13.2678L12.0036 16.3576L15.0987 13.2678ZM12.0036 10.1727L13.8306 11.9998L12.0036 13.8268L10.1818 12.0049V11.9998L10.5027 11.6789L10.658 11.5236L12.0036 10.1727ZM5.8446 10.1986L7.64574 11.9998L5.8446 13.7957L4.04346 11.9945L5.8446 10.1986ZM18.1627 10.1986L19.9639 11.9998L18.1627 13.7957L16.3616 11.9945L18.1627 10.1986ZM12.0036 4.03955L16.8946 8.93057L15.0936 10.7317L12.0036 7.63665L8.91377 10.7265L7.11264 8.93057L12.0036 4.03955Z" fill="#F3BA2F"/>
</g>
<defs>
<clipPath id="clip0_2062_2927">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  )
);

Binance.displayName = "Binance";

export const BinanceMetadata = {
  id: "Binance",
  baseId: "Binance",
  variant: "default",
  name: "Binance",
  category: "crypto",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Binance;
