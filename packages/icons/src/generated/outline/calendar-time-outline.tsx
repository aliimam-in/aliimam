/**
 * Auto-generated logo component: Calendar Time Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CalendarTimeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CalendarTimeOutlineLogo = React.forwardRef<SVGSVGElement, CalendarTimeOutlineLogoProps>(
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
      <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
  <path d="M14 18a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path d="M15 3v4" />
  <path d="M7 3v4" />
  <path d="M3 11h16" />
  <path d="M18 16.496v1.504l1 1" />
    </svg>
  )
);

CalendarTimeOutlineLogo.displayName = "CalendarTimeOutlineLogo";

export const CalendarTimeOutlineLogoMetadata = {
  id: "calendar-time-outline",
  baseId: "calendar-time-outline",
  variant: "default",
  name: "Calendar Time Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CalendarTimeOutlineLogo;
