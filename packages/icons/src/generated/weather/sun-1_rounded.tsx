/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Sun1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Sun1Rounded = React.forwardRef<SVGSVGElement, Sun1RoundedProps>(
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
      <path d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Sun1Rounded.displayName = "Sun1Rounded";
export const Sun1RoundedMetadata = { 
  id: "sun-1_rounded", 
  baseId: "sun-1", 
  variant: "rounded", 
  name: "Sun 1", 
  category: "weather", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Sun1Rounded;
