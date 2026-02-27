/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Wind2RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Wind2Rounded = React.forwardRef<SVGSVGElement, Wind2RoundedProps>(
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
      <path d="M2 13.1L4.5 11.6C6.04 10.68 7.96 10.68 9.5 11.6C11.04 12.52 12.96 12.52 14.5 11.6C16.04 10.68 17.96 10.68 19.5 11.6L22 13.1"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 3.89999L4.5 5.39999C6.04 6.31999 7.96 6.31999 9.5 5.39999C11.04 4.47999 12.96 4.47999 14.5 5.39999C16.04 6.31999 17.96 6.31999 19.5 5.39999L22 3.89999"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 20.1L4.5 18.6C6.04 17.68 7.96 17.68 9.5 18.6C11.04 19.52 12.96 19.52 14.5 18.6C16.04 17.68 17.96 17.68 19.5 18.6L22 20.1"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Wind2Rounded.displayName = "Wind2Rounded";
export const Wind2RoundedMetadata = { 
  id: "wind-2_rounded", 
  baseId: "wind-2", 
  variant: "rounded", 
  name: "Wind 2", 
  category: "weather", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Wind2Rounded;
