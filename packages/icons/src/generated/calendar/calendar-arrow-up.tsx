/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CalendarArrowUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CalendarArrowUp = React.forwardRef<SVGSVGElement, CalendarArrowUpProps>(
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
      <path d="m14 18 4-4 4 4" />
  <path d="M16 2v4" />
  <path d="M18 22v-8" />
  <path d="M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9" />
  <path d="M3 10h18" />
  <path d="M8 2v4" />
    </svg>
  )
);
CalendarArrowUp.displayName = "CalendarArrowUp";
export const CalendarArrowUpMetadata = { 
  id: "calendar-arrow-up", 
  baseId: "calendar-arrow-up", 
  variant: "default", 
  name: "Calendar Arrow Up", 
  category: "calendar", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CalendarArrowUp;
