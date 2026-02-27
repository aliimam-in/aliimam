/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CelsiusCelRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CelsiusCelRounded = React.forwardRef<SVGSVGElement, CelsiusCelRoundedProps>(
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
      <path d="M16.3001 15.3C15.3001 16.6 13.7001 17.5 12.0001 17.5C9.0001 17.5 6.6001 15.1 6.6001 12.1C6.6001 9.09998 9.0001 6.59998 12.0001 6.59998C13.2001 6.59998 14.4001 6.99998 15.3001 7.69998"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.4 11.4C18.0627 11.4 18.6 10.8627 18.6 10.2C18.6 9.53726 18.0627 9 17.4 9C16.7372 9 16.2 9.53726 16.2 10.2C16.2 10.8627 16.7372 11.4 17.4 11.4Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
CelsiusCelRounded.displayName = "CelsiusCelRounded";
export const CelsiusCelRoundedMetadata = { 
  id: "celsius-cel-_rounded", 
  baseId: "celsius-cel-", 
  variant: "rounded", 
  name: "Celsius Cel ", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CelsiusCelRounded;
