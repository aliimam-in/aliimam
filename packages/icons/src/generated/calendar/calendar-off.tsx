/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CalendarOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CalendarOff = React.forwardRef<SVGSVGElement, CalendarOffProps>(
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
      <path d="M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18" />
  <path d="M21 15.5V6a2 2 0 0 0-2-2H9.5" />
  <path d="M16 2v4" />
  <path d="M3 10h7" />
  <path d="M21 10h-5.5" />
  <path d="m2 2 20 20" />
    </svg>
  )
);
CalendarOff.displayName = "CalendarOff";
export const CalendarOffMetadata = { 
  id: "calendar-off", 
  baseId: "calendar-off", 
  variant: "default", 
  name: "Calendar Off", 
  category: "calendar", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CalendarOff;
