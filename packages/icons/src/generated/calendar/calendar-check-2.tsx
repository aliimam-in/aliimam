/**
 * Auto-generated logo component: Calendar Check 2 (default)
 * Category: calendar
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CalendarCheck2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CalendarCheck2Logo = React.forwardRef<SVGSVGElement, CalendarCheck2LogoProps>(
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
  <path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
  <path d="M3 10h18" />
  <path d="m16 20 2 2 4-4" />
    </svg>
  )
);

CalendarCheck2Logo.displayName = "CalendarCheck2Logo";

export const CalendarCheck2LogoMetadata = {
  id: "calendar-check-2",
  baseId: "calendar-check-2",
  variant: "default",
  name: "Calendar Check 2",
  category: "calendar",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CalendarCheck2Logo;
