/**
 * Auto-generated logo component: Calendar Plus 2 (default)
 * Category: calendar
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CalendarPlus2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CalendarPlus2Logo = React.forwardRef<SVGSVGElement, CalendarPlus2LogoProps>(
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
  <rect width="18" height="18" x="3" y="4" rx="2" />
  <path d="M3 10h18" />
  <path d="M10 16h4" />
  <path d="M12 14v4" />
    </svg>
  )
);

CalendarPlus2Logo.displayName = "CalendarPlus2Logo";

export const CalendarPlus2LogoMetadata = {
  id: "calendar-plus-2",
  baseId: "calendar-plus-2",
  variant: "default",
  name: "Calendar Plus 2",
  category: "calendar",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CalendarPlus2Logo;
