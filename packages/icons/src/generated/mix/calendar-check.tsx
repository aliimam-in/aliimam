/**
 * Auto-generated logo component: Calendar Check (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CalendarCheckLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CalendarCheckLogo = React.forwardRef<SVGSVGElement, CalendarCheckLogoProps>(
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
  <path d="m9 16 2 2 4-4" />
    </svg>
  )
);

CalendarCheckLogo.displayName = "CalendarCheckLogo";

export const CalendarCheckLogoMetadata = {
  id: "calendar-check",
  baseId: "calendar-check",
  variant: "default",
  name: "Calendar Check",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CalendarCheckLogo;
