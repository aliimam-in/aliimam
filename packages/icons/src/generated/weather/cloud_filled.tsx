/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CloudFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CloudFilled = React.forwardRef<SVGSVGElement, CloudFilledProps>(
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
      <path d="M21.74 12.9099C21.48 12.0499 21.05 11.2999 20.48 10.6899C19.75 9.85986 18.78 9.28986 17.69 9.03986C17.14 6.53986 15.6 4.73986 13.41 4.06986C11.03 3.32986 8.27 4.04986 6.54 5.85986C5.02 7.44986 4.52 9.63986 5.11 11.9699C3.11 12.4599 2.12 14.1299 2.01 15.7199C2 15.8299 2 15.9299 2 16.0299C2 17.9099 3.23 20.0199 5.97 20.2199H16.35C17.77 20.2199 19.13 19.6899 20.17 18.7399C21.8 17.3099 22.4 15.0799 21.74 12.9099Z" fill="currentColor"/>
    </svg>
  )
);
CloudFilled.displayName = "CloudFilled";
export const CloudFilledMetadata = { 
  id: "cloud_filled", 
  baseId: "cloud", 
  variant: "filled", 
  name: "Cloud", 
  category: "weather", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CloudFilled;
