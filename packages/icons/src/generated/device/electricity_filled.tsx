/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ElectricityFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ElectricityFilled = React.forwardRef<SVGSVGElement, ElectricityFilledProps>(
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
      <path d="M15.59 5H15.25V2C15.25 1.59 14.91 1.25 14.5 1.25C14.09 1.25 13.75 1.59 13.75 2V5H10.25V2C10.25 1.59 9.91 1.25 9.5 1.25C9.09 1.25 8.75 1.59 8.75 2V5H8.41C7.36 5 6.5 5.86 6.5 6.91V12C6.5 14.2 8 16 10.5 16H11.25V22C11.25 22.41 11.59 22.75 12 22.75C12.41 22.75 12.75 22.41 12.75 22V16H13.5C16 16 17.5 14.2 17.5 12V6.91C17.5 5.86 16.64 5 15.59 5Z" fill="currentColor"/>
    </svg>
  )
);
ElectricityFilled.displayName = "ElectricityFilled";
export const ElectricityFilledMetadata = { 
  id: "electricity_filled", 
  baseId: "electricity", 
  variant: "filled", 
  name: "Electricity", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ElectricityFilled;
