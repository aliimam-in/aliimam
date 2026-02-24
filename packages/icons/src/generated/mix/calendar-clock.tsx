/**
 * Auto-generated logo component: Calendar Clock (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CalendarClockLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CalendarClockLogo = React.forwardRef<SVGSVGElement, CalendarClockLogoProps>(
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
      <path d="M16 14v2.2l1.6 1" />
  <path d="M16 2v4" />
  <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
  <path d="M3 10h5" />
  <path d="M8 2v4" />
  <circle cx="16" cy="16" r="6" />
    </svg>
  )
);

CalendarClockLogo.displayName = "CalendarClockLogo";

export const CalendarClockLogoMetadata = {
  id: "calendar-clock",
  baseId: "calendar-clock",
  variant: "default",
  name: "Calendar Clock",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CalendarClockLogo;
