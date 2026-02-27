/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TetherUsdtRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TetherUsdtRounded = React.forwardRef<SVGSVGElement, TetherUsdtRoundedProps>(
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
      <path d="M7.46995 3.34998H16.53C17.59 3.34998 18.84 4.11998 19.31 5.06998L21.71 9.88998C22.29 11.05 21.97 12.7 21.02 13.57L14.09 19.86C12.94 20.9 11.07 20.9 9.91996 19.86L2.98996 13.57C2.02996 12.7 1.71996 11.05 2.29996 9.88998L4.69996 5.06998C5.15996 4.11998 6.40996 3.34998 7.46995 3.34998Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 14.5V8.5"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 8.5H16"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
TetherUsdtRounded.displayName = "TetherUsdtRounded";
export const TetherUsdtRoundedMetadata = { 
  id: "tether-usdt_rounded", 
  baseId: "tether-usdt", 
  variant: "rounded", 
  name: "Tether Usdt", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TetherUsdtRounded;
