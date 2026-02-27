/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MilkRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MilkRounded = React.forwardRef<SVGSVGElement, MilkRoundedProps>(
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
      <path d="M18 15V19C18 20.65 16.65 22 15 22H9C7.35 22 6 20.65 6 19V13.98L9.89001 14C10.62 14 11.34 14.17 12 14.5C12.66 14.83 13.38 15 14.12 15H18Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 10.83V15H14.12C13.38 15 12.66 14.83 12 14.5C11.34 14.17 10.62 14 9.89001 14L6 13.98V10.83C6 10.37 6.26003 9.74 6.59003 9.41L8.71002 7.28999C8.89002 7.10999 9 6.85 9 6.59V5H15V6.59C15 6.85 15.11 7.10999 15.29 7.28999L17.41 9.41C17.74 9.74 18 10.37 18 10.83Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 16V15"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 14.98V13.98"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 5H9.5C8.67 5 8 4.32 8 3.5C8 2.68 8.67 2 9.5 2H14.5C15.33 2 16 2.68 16 3.5C16 4.32 15.33 5 14.5 5Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
MilkRounded.displayName = "MilkRounded";
export const MilkRoundedMetadata = { 
  id: "milk_rounded", 
  baseId: "milk", 
  variant: "rounded", 
  name: "Milk", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MilkRounded;
