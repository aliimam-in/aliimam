/**
 * Auto-generated logo component: Calendar Arrow Up (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CalendarArrowUpLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CalendarArrowUpLogo = React.forwardRef<SVGSVGElement, CalendarArrowUpLogoProps>(
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
      <path d="m14 18 4-4 4 4" />
  <path d="M16 2v4" />
  <path d="M18 22v-8" />
  <path d="M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9" />
  <path d="M3 10h18" />
  <path d="M8 2v4" />
    </svg>
  )
);

CalendarArrowUpLogo.displayName = "CalendarArrowUpLogo";

export const CalendarArrowUpLogoMetadata = {
  id: "calendar-arrow-up",
  baseId: "calendar-arrow-up",
  variant: "default",
  name: "Calendar Arrow Up",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CalendarArrowUpLogo;
