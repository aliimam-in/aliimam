/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CalendarProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Calendar = React.forwardRef<SVGSVGElement, CalendarProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M8 2v4" />
  <path d="M16 2v4" />
  <rect width="18" height="18" x="3" y="4" rx="2" />
  <path d="M3 10h18" />
    </svg>
  )
);
Calendar.displayName = "Calendar";
export const CalendarMetadata = { id: "calendar", baseId: "calendar", variant: "default", name: "Calendar", category: "calendar", tags: [], viewBox: "0 0 24 24" } as const;
export default Calendar;
