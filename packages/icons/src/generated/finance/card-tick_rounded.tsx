/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CardTickRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CardTickRounded = React.forwardRef<SVGSVGElement, CardTickRoundedProps>(
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
      <path d="M2 10H22"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.5483 20.4998H6.43829C2.88829 20.4998 1.98828 19.6198 1.98828 16.1098V7.88977C1.98828 4.70977 2.72831 3.68977 5.51831 3.52977C5.79831 3.51977 6.10829 3.50977 6.43829 3.50977H17.5483C21.0983 3.50977 21.9983 4.38977 21.9983 7.89977V12.3098"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 16H10"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 18C22 18.75 21.79 19.46 21.42 20.06C20.73 21.22 19.46 22 18 22C16.54 22 15.27 21.22 14.58 20.06C14.21 19.46 14 18.75 14 18C14 15.79 15.79 14 18 14C20.21 14 22 15.79 22 18Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.4414 17.9995L17.4314 18.9895L19.5614 17.0195"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
CardTickRounded.displayName = "CardTickRounded";
export const CardTickRoundedMetadata = { 
  id: "card-tick_rounded", 
  baseId: "card-tick", 
  variant: "rounded", 
  name: "Card Tick", 
  category: "finance", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CardTickRounded;
