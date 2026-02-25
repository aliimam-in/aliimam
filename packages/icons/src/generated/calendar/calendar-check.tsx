/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CalendarCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CalendarCheck = React.forwardRef<SVGSVGElement, CalendarCheckProps>(
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
      <path d="M8 2v4" />
  <path d="M16 2v4" />
  <rect width="18" height="18" x="3" y="4" rx="2" />
  <path d="M3 10h18" />
  <path d="m9 16 2 2 4-4" />
    </svg>
  )
);
CalendarCheck.displayName = "CalendarCheck";
export const CalendarCheckMetadata = { 
  id: "calendar-check", 
  baseId: "calendar-check", 
  variant: "default", 
  name: "Calendar Check", 
  category: "calendar", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CalendarCheck;
