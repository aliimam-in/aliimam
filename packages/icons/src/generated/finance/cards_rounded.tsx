/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CardsRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CardsRounded = React.forwardRef<SVGSVGElement, CardsRoundedProps>(
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
      <path d="M2 12.61H19"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 10.28V17.43C18.97 20.28 18.19 21 15.22 21H5.78003C2.76003 21 2 20.25 2 17.27V10.28C2 7.57999 2.63 6.70999 5 6.56999C5.24 6.55999 5.50003 6.54999 5.78003 6.54999H15.22C18.24 6.54999 19 7.29999 19 10.28Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 6.73V13.72C22 16.42 21.37 17.29 19 17.43V10.28C19 7.3 18.24 6.55 15.22 6.55H5.78003C5.50003 6.55 5.24 6.56 5 6.57C5.03 3.72 5.81003 3 8.78003 3H18.22C21.24 3 22 3.75 22 6.73Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.25 17.81H6.96997"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.10986 17.81H12.5499"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
CardsRounded.displayName = "CardsRounded";
export const CardsRoundedMetadata = { 
  id: "cards_rounded", 
  baseId: "cards", 
  variant: "rounded", 
  name: "Cards", 
  category: "finance", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CardsRounded;
