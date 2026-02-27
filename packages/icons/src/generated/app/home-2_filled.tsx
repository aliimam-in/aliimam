/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Home2FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Home2Filled = React.forwardRef<SVGSVGElement, Home2FilledProps>(
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
      <path d="M20.04 6.81994L14.28 2.78994C12.71 1.68994 10.3 1.74994 8.78999 2.91994L3.77999 6.82994C2.77999 7.60994 1.98999 9.20994 1.98999 10.4699V17.3699C1.98999 19.9199 4.05999 21.9999 6.60999 21.9999H17.39C19.94 21.9999 22.01 19.9299 22.01 17.3799V10.5999C22.01 9.24994 21.14 7.58994 20.04 6.81994ZM12.75 17.9999C12.75 18.4099 12.41 18.7499 12 18.7499C11.59 18.7499 11.25 18.4099 11.25 17.9999V14.9999C11.25 14.5899 11.59 14.2499 12 14.2499C12.41 14.2499 12.75 14.5899 12.75 14.9999V17.9999Z" fill="currentColor"/>
    </svg>
  )
);
Home2Filled.displayName = "Home2Filled";
export const Home2FilledMetadata = { 
  id: "home-2_filled", 
  baseId: "home-2", 
  variant: "filled", 
  name: "Home 2", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Home2Filled;
