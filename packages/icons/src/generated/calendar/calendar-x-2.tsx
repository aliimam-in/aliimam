/**
 * Auto-generated logo component: Calendar X 2 (default)
 * Category: calendar
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CalendarX2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CalendarX2Logo = React.forwardRef<SVGSVGElement, CalendarX2LogoProps>(
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
      <path d="M8 2v4" />
  <path d="M16 2v4" />
  <path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
  <path d="M3 10h18" />
  <path d="m17 22 5-5" />
  <path d="m17 17 5 5" />
    </svg>
  )
);

CalendarX2Logo.displayName = "CalendarX2Logo";

export const CalendarX2LogoMetadata = {
  id: "calendar-x-2",
  baseId: "calendar-x-2",
  variant: "default",
  name: "Calendar X 2",
  category: "calendar",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CalendarX2Logo;
