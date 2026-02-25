/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CalendarMinusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CalendarMinus = React.forwardRef<SVGSVGElement, CalendarMinusProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M16 19h6" />
  <path d="M16 2v4" />
  <path d="M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5" />
  <path d="M3 10h18" />
  <path d="M8 2v4" />
    </svg>
  )
);
CalendarMinus.displayName = "CalendarMinus";
export const CalendarMinusMetadata = { id: "calendar-minus", baseId: "calendar-minus", variant: "default", name: "Calendar Minus", category: "calendar", tags: [], viewBox: "0 0 24 24" } as const;
export default CalendarMinus;
