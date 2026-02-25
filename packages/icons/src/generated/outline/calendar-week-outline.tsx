/**
 * Auto-generated logo component: Calendar Week Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CalendarWeekOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CalendarWeekOutlineLogo = React.forwardRef<SVGSVGElement, CalendarWeekOutlineLogoProps>(
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
  <path d="M7 14h.013" />
  <path d="M10.01 14h.005" />
  <path d="M13.01 14h.005" />
  <path d="M16.015 14h.005" />
  <path d="M13.015 17h.005" />
  <path d="M7.01 17h.005" />
  <path d="M10.01 17h.005" />
    </svg>
  )
);

CalendarWeekOutlineLogo.displayName = "CalendarWeekOutlineLogo";

export const CalendarWeekOutlineLogoMetadata = {
  id: "calendar-week-outline",
  baseId: "calendar-week-outline",
  variant: "default",
  name: "Calendar Week Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CalendarWeekOutlineLogo;
