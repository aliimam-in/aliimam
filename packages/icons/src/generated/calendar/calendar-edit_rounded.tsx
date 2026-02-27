/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CalendarEditRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CalendarEditRounded = React.forwardRef<SVGSVGElement, CalendarEditRoundedProps>(
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
      <path d="M8 2V5" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 2V5" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 9.09H20.5" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.21 15.77L15.6701 19.31C15.5301 19.45 15.4 19.71 15.37 19.9L15.18 21.25C15.11 21.74 15.45 22.08 15.94 22.01L17.29 21.82C17.48 21.79 17.75 21.66 17.88 21.52L21.4201 17.98C22.0301 17.37 22.3201 16.66 21.4201 15.76C20.5301 14.87 19.82 15.16 19.21 15.77Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.7001 16.28C19.0001 17.36 19.8401 18.2 20.9201 18.5" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V12" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9955 13.7H12.0045" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.29431 13.7H8.30329" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.29431 16.7H8.30329" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
CalendarEditRounded.displayName = "CalendarEditRounded";
export const CalendarEditRoundedMetadata = { 
  id: "calendar-edit_rounded", 
  baseId: "calendar-edit", 
  variant: "rounded", 
  name: "Calendar Edit", 
  category: "calendar", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CalendarEditRounded;
