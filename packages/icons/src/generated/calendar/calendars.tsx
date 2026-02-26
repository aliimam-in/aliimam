/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CalendarsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Calendars = React.forwardRef<SVGSVGElement, CalendarsProps>(
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
      <path d="M12 2v2" />
  <path d="M15.726 21.01A2 2 0 0 1 14 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2" />
  <path d="M18 2v2" />
  <path d="M2 13h2" />
  <path d="M8 8h14" />
  <rect x="8" y="3" width="14" height="14" rx="2" />
    </svg>
  )
);
Calendars.displayName = "Calendars";
export const CalendarsMetadata = { 
  id: "calendars", 
  baseId: "calendars", 
  variant: "default", 
  name: "Calendars", 
  category: "calendar", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Calendars;
