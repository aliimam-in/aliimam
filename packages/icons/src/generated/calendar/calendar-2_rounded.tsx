/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Calendar2RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Calendar2Rounded = React.forwardRef<SVGSVGElement, Calendar2RoundedProps>(
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
      <path d="M8 2V5"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 2V5"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 9.09H20.5"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9955 13.7H12.0045"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.29431 13.7H8.30329"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.29431 16.7H8.30329"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Calendar2Rounded.displayName = "Calendar2Rounded";
export const Calendar2RoundedMetadata = { 
  id: "calendar-2_rounded", 
  baseId: "calendar-2", 
  variant: "rounded", 
  name: "Calendar 2", 
  category: "calendar", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Calendar2Rounded;
