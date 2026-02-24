/**
 * Auto-generated logo component: Calendar Arrow Down (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CalendarArrowDownLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CalendarArrowDownLogo = React.forwardRef<SVGSVGElement, CalendarArrowDownLogoProps>(
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
      <path d="m14 18 4 4 4-4" />
  <path d="M16 2v4" />
  <path d="M18 14v8" />
  <path d="M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343" />
  <path d="M3 10h18" />
  <path d="M8 2v4" />
    </svg>
  )
);

CalendarArrowDownLogo.displayName = "CalendarArrowDownLogo";

export const CalendarArrowDownLogoMetadata = {
  id: "calendar-arrow-down",
  baseId: "calendar-arrow-down",
  variant: "default",
  name: "Calendar Arrow Down",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CalendarArrowDownLogo;
