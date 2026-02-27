/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ReserveRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ReserveRounded = React.forwardRef<SVGSVGElement, ReserveRoundedProps>(
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
      <path d="M18.97 22H4.97C1.97 22 1.97 20.65 1.97 19V18C1.97 17.45 2.42 17 2.97 17H20.97C21.52 17 21.97 17.45 21.97 18V19C21.97 20.65 21.97 22 18.97 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.72 13V17H3.26999V13C3.26999 9.16 5.97999 5.95 9.58999 5.18C10.13 5.06 10.69 5 11.27 5H12.72C13.3 5 13.87 5.06 14.41 5.18C18.02 5.96 20.72 9.16 20.72 13Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 4.5C14.5 4.74 14.47 4.96 14.41 5.18C13.87 5.06 13.3 5 12.72 5H11.27C10.69 5 10.13 5.06 9.59 5.18C9.53 4.96 9.5 4.74 9.5 4.5C9.5 3.12 10.62 2 12 2C13.38 2 14.5 3.12 14.5 4.5Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 11H9"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ReserveRounded.displayName = "ReserveRounded";
export const ReserveRoundedMetadata = { 
  id: "reserve_rounded", 
  baseId: "reserve", 
  variant: "rounded", 
  name: "Reserve", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ReserveRounded;
