/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CalendarCircleRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CalendarCircleRounded = React.forwardRef<SVGSVGElement, CalendarCircleRoundedProps>(
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
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.89001 5.82999V7.82999" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.11 5.82999V7.82999" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.53003 10.14H16.47" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.5 17.67H10.5C8 17.67 6.5 15.87 6.5 13.67V10.67C6.5 8.47001 8 6.67001 10.5 6.67001H13.5C16 6.67001 17.5 8.47001 17.5 10.67V13.67C17.5 15.87 16 17.67 13.5 17.67Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
CalendarCircleRounded.displayName = "CalendarCircleRounded";
export const CalendarCircleRoundedMetadata = { 
  id: "calendar-circle_rounded", 
  baseId: "calendar-circle", 
  variant: "rounded", 
  name: "Calendar Circle", 
  category: "calendar", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CalendarCircleRounded;
