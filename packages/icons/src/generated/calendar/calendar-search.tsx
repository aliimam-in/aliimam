/**
 * Auto-generated logo component: Calendar Search (default)
 * Category: calendar
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CalendarSearchLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CalendarSearchLogo = React.forwardRef<SVGSVGElement, CalendarSearchLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M16 2v4" />
  <path d="M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25" />
  <path d="m22 22-1.875-1.875" />
  <path d="M3 10h18" />
  <path d="M8 2v4" />
  <circle cx="18" cy="18" r="3" />
    </svg>
  )
);

CalendarSearchLogo.displayName = "CalendarSearchLogo";

export const CalendarSearchLogoMetadata = {
  id: "calendar-search",
  baseId: "calendar-search",
  variant: "default",
  name: "Calendar Search",
  category: "calendar",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CalendarSearchLogo;
