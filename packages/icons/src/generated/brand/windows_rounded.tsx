/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface WindowsRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const WindowsRounded = React.forwardRef<SVGSVGElement, WindowsRoundedProps>(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M22 2L12 4V11H22V2Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M22 22L12 20V13H22V22Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M10 4.29999L2 5.99999V11H10V4.29999Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M10 19.7L2 18V13H10V19.7Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
WindowsRounded.displayName = "WindowsRounded";
export const WindowsRoundedMetadata = { 
  id: "windows_rounded", 
  baseId: "windows", 
  variant: "rounded", 
  name: "Windows", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default WindowsRounded;
