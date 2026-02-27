/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CalendarAddRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CalendarAddRounded = React.forwardRef<SVGSVGElement, CalendarAddRoundedProps>(
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
<path d="M18 23C20.2091 23 22 21.2091 22 19C22 16.7909 20.2091 15 18 15C15.7909 15 14 16.7909 14 19C14 21.2091 15.7909 23 18 23Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.49 19.05H16.51"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 17.59V20.58"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 8.5V16.36C20.27 15.53 19.2 15 18 15C15.79 15 14 16.79 14 19C14 19.75 14.21 20.46 14.58 21.06C14.79 21.42 15.06 21.74 15.37 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9955 13.7H12.0045"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.29431 13.7H8.30329"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.29431 16.7H8.30329"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
CalendarAddRounded.displayName = "CalendarAddRounded";
export const CalendarAddRoundedMetadata = { 
  id: "calendar-add_rounded", 
  baseId: "calendar-add", 
  variant: "rounded", 
  name: "Calendar Add", 
  category: "calendar", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CalendarAddRounded;
