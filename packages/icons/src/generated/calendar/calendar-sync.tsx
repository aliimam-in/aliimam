/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CalendarSyncProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CalendarSync = React.forwardRef<SVGSVGElement, CalendarSyncProps>(
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
      <path d="M11 10v4h4" />
  <path d="m11 14 1.535-1.605a5 5 0 0 1 8 1.5" />
  <path d="M16 2v4" />
  <path d="m21 18-1.535 1.605a5 5 0 0 1-8-1.5" />
  <path d="M21 22v-4h-4" />
  <path d="M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3" />
  <path d="M3 10h4" />
  <path d="M8 2v4" />
    </svg>
  )
);
CalendarSync.displayName = "CalendarSync";
export const CalendarSyncMetadata = { 
  id: "calendar-sync", 
  baseId: "calendar-sync", 
  variant: "default", 
  name: "Calendar Sync", 
  category: "calendar", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CalendarSync;
