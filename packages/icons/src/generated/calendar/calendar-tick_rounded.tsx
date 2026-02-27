/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CalendarTickRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CalendarTickRounded = React.forwardRef<SVGSVGElement, CalendarTickRoundedProps>(
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
<path d="M22 19C22 19.75 21.79 20.46 21.42 21.06C20.73 22.22 19.46 23 18 23C16.99 23 16.07 22.63 15.37 22C15.06 21.74 14.79 21.42 14.58 21.06C14.21 20.46 14 19.75 14 19C14 16.79 15.79 15 18 15C19.2 15 20.27 15.53 21 16.36C21.62 17.07 22 17.99 22 19Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.4399 19L17.4299 19.99L19.5599 18.02"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 8.5V16.36C20.27 15.53 19.2 15 18 15C15.79 15 14 16.79 14 19C14 19.75 14.21 20.46 14.58 21.06C14.79 21.42 15.06 21.74 15.37 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9955 13.7H12.0045"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.29431 13.7H8.30329"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.29431 16.7H8.30329"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
CalendarTickRounded.displayName = "CalendarTickRounded";
export const CalendarTickRoundedMetadata = { 
  id: "calendar-tick_rounded", 
  baseId: "calendar-tick", 
  variant: "rounded", 
  name: "Calendar Tick", 
  category: "calendar", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CalendarTickRounded;
