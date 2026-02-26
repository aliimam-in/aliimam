/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CalendarPlus2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CalendarPlus2 = React.forwardRef<SVGSVGElement, CalendarPlus2Props>(
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
  <path d="M10 16h4" />
  <path d="M12 14v4" />
    </svg>
  )
);
CalendarPlus2.displayName = "CalendarPlus2";
export const CalendarPlus2Metadata = { 
  id: "calendar-plus-2", 
  baseId: "calendar-plus-2", 
  variant: "default", 
  name: "Calendar Plus 2", 
  category: "calendar", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CalendarPlus2;
