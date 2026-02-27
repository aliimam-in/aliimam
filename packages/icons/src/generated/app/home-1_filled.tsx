/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Home1FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Home1Filled = React.forwardRef<SVGSVGElement, Home1FilledProps>(
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
      <path d="M20.83 8.01002L14.28 2.77002C13 1.75002 11 1.74002 9.72999 2.76002L3.17999 8.01002C2.23999 8.76002 1.66999 10.26 1.86999 11.44L3.12999 18.98C3.41999 20.67 4.98999 22 6.69999 22H17.3C18.99 22 20.59 20.64 20.88 18.97L22.14 11.43C22.32 10.26 21.75 8.76002 20.83 8.01002ZM12.75 18C12.75 18.41 12.41 18.75 12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18Z" fill="currentColor"/>
    </svg>
  )
);
Home1Filled.displayName = "Home1Filled";
export const Home1FilledMetadata = { 
  id: "home-1_filled", 
  baseId: "home-1", 
  variant: "filled", 
  name: "Home 1", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Home1Filled;
