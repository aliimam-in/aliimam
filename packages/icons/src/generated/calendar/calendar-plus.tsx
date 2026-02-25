/**
 * Auto-generated logo component: Calendar Plus (default)
 * Category: calendar
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CalendarPlusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CalendarPlusLogo = React.forwardRef<SVGSVGElement, CalendarPlusLogoProps>(
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
      <path d="M16 19h6" />
  <path d="M16 2v4" />
  <path d="M19 16v6" />
  <path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5" />
  <path d="M3 10h18" />
  <path d="M8 2v4" />
    </svg>
  )
);

CalendarPlusLogo.displayName = "CalendarPlusLogo";

export const CalendarPlusLogoMetadata = {
  id: "calendar-plus",
  baseId: "calendar-plus",
  variant: "default",
  name: "Calendar Plus",
  category: "calendar",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CalendarPlusLogo;
