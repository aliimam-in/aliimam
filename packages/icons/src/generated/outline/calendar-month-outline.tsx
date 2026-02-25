/**
 * Auto-generated logo component: Calendar Month Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CalendarMonthOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CalendarMonthOutlineLogo = React.forwardRef<SVGSVGElement, CalendarMonthOutlineLogoProps>(
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
      <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12" />
  <path d="M16 3v4" />
  <path d="M8 3v4" />
  <path d="M4 11h16" />
  <path d="M8 14v4" />
  <path d="M12 14v4" />
  <path d="M16 14v4" />
    </svg>
  )
);

CalendarMonthOutlineLogo.displayName = "CalendarMonthOutlineLogo";

export const CalendarMonthOutlineLogoMetadata = {
  id: "calendar-month-outline",
  baseId: "calendar-month-outline",
  variant: "default",
  name: "Calendar Month Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CalendarMonthOutlineLogo;
