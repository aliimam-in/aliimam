/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CalendarSearchRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CalendarSearchRounded = React.forwardRef<SVGSVGElement, CalendarSearchRoundedProps>(
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
<path d="M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 22L21 21"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 9.09H20.5"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.37 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V13"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9955 13.7H12.0045"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.29431 13.7H8.30329"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.29431 16.7H8.30329"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
CalendarSearchRounded.displayName = "CalendarSearchRounded";
export const CalendarSearchRoundedMetadata = { 
  id: "calendar-search_rounded", 
  baseId: "calendar-search", 
  variant: "rounded", 
  name: "Calendar Search", 
  category: "calendar", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CalendarSearchRounded;
