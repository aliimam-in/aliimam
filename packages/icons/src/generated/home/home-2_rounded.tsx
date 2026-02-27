/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Home2RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Home2Rounded = React.forwardRef<SVGSVGElement, Home2RoundedProps>(
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
      <path d="M9.02 2.84L3.63 7.04C2.73 7.74 2 9.23 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.29 21.19 7.74 20.2 7.05L14.02 2.72C12.62 1.74 10.37 1.79 9.02 2.84Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 17.99V14.99"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Home2Rounded.displayName = "Home2Rounded";
export const Home2RoundedMetadata = { 
  id: "home-2_rounded", 
  baseId: "home-2", 
  variant: "rounded", 
  name: "Home 2", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Home2Rounded;
