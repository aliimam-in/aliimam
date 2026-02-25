/**
 * Auto-generated logo component: Calendar Pause Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CalendarPauseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CalendarPauseOutlineLogo = React.forwardRef<SVGSVGElement, CalendarPauseOutlineLogoProps>(
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
      <path d="M13 21h-7a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" />
  <path d="M16 3v4" />
  <path d="M8 3v4" />
  <path d="M4 11h16" />
  <path d="M17 17v5" />
  <path d="M21 17v5" />
    </svg>
  )
);

CalendarPauseOutlineLogo.displayName = "CalendarPauseOutlineLogo";

export const CalendarPauseOutlineLogoMetadata = {
  id: "calendar-pause-outline",
  baseId: "calendar-pause-outline",
  variant: "default",
  name: "Calendar Pause Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CalendarPauseOutlineLogo;
