/**
 * Auto-generated logo component: Calendar Range (default)
 * Category: calendar
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CalendarRangeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CalendarRangeLogo = React.forwardRef<SVGSVGElement, CalendarRangeLogoProps>(
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
      <rect width="18" height="18" x="3" y="4" rx="2" />
  <path d="M16 2v4" />
  <path d="M3 10h18" />
  <path d="M8 2v4" />
  <path d="M17 14h-6" />
  <path d="M13 18H7" />
  <path d="M7 14h.01" />
  <path d="M17 18h.01" />
    </svg>
  )
);

CalendarRangeLogo.displayName = "CalendarRangeLogo";

export const CalendarRangeLogoMetadata = {
  id: "calendar-range",
  baseId: "calendar-range",
  variant: "default",
  name: "Calendar Range",
  category: "calendar",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CalendarRangeLogo;
