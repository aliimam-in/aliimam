/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MoneyRemoveRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MoneyRemoveRounded = React.forwardRef<SVGSVGElement, MoneyRemoveRoundedProps>(
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
      <path d="M2 15.3V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9V15C22 18.5 20 20 17 20H8.5"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 9.5V14.5"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 18C9 18.75 8.78998 19.46 8.41998 20.06C7.72998 21.22 6.46 22 5 22C3.54 22 2.27002 21.22 1.58002 20.06C1.21002 19.46 1 18.75 1 18C1 15.79 2.79 14 5 14C7.21 14 9 15.79 9 18Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.07117 19.04L3.96118 16.93"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.03992 16.96L3.92993 19.07"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
MoneyRemoveRounded.displayName = "MoneyRemoveRounded";
export const MoneyRemoveRoundedMetadata = { 
  id: "money-remove_rounded", 
  baseId: "money-remove", 
  variant: "rounded", 
  name: "Money Remove", 
  category: "finance", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MoneyRemoveRounded;
