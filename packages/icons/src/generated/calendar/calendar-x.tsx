/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CalendarXProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CalendarX = React.forwardRef<SVGSVGElement, CalendarXProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M8 2v4" />
  <path d="M16 2v4" />
  <rect width="18" height="18" x="3" y="4" rx="2" />
  <path d="M3 10h18" />
  <path d="m14 14-4 4" />
  <path d="m10 14 4 4" />
    </svg>
  )
);
CalendarX.displayName = "CalendarX";
export const CalendarXMetadata = { id: "calendar-x", baseId: "calendar-x", variant: "default", name: "Calendar X", category: "calendar", tags: [], viewBox: "0 0 24 24" } as const;
export default CalendarX;
