/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CalendarDaysProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CalendarDays = React.forwardRef<SVGSVGElement, CalendarDaysProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M8 2v4" />
  <path d="M16 2v4" />
  <rect width="18" height="18" x="3" y="4" rx="2" />
  <path d="M3 10h18" />
  <path d="M8 14h.01" />
  <path d="M12 14h.01" />
  <path d="M16 14h.01" />
  <path d="M8 18h.01" />
  <path d="M12 18h.01" />
  <path d="M16 18h.01" />
    </svg>
  )
);
CalendarDays.displayName = "CalendarDays";
export const CalendarDaysMetadata = { id: "calendar-days", baseId: "calendar-days", variant: "default", name: "Calendar Days", category: "calendar", tags: [], viewBox: "0 0 24 24" } as const;
export default CalendarDays;
