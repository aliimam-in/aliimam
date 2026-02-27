/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ElectricityRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ElectricityRounded = React.forwardRef<SVGSVGElement, ElectricityRoundedProps>(
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
      <path d="M10.5 16H13.5C16 16 17.5 14.2 17.5 12V6.91C17.5 5.86 16.64 5 15.59 5H8.42006C7.37006 5 6.51006 5.86 6.51006 6.91V12C6.50006 14.2 8.00005 16 10.5 16Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.5 2V5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 2V5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22V16" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ElectricityRounded.displayName = "ElectricityRounded";
export const ElectricityRoundedMetadata = { 
  id: "electricity_rounded", 
  baseId: "electricity", 
  variant: "rounded", 
  name: "Electricity", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ElectricityRounded;
