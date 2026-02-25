/**
 * Auto-generated logo component: Calendar Event Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CalendarEventOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CalendarEventOutlineLogo = React.forwardRef<SVGSVGElement, CalendarEventOutlineLogoProps>(
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
      <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" />
  <path d="M16 3l0 4" />
  <path d="M8 3l0 4" />
  <path d="M4 11l16 0" />
  <path d="M8 15h2v2h-2l0 -2" />
    </svg>
  )
);

CalendarEventOutlineLogo.displayName = "CalendarEventOutlineLogo";

export const CalendarEventOutlineLogoMetadata = {
  id: "calendar-event-outline",
  baseId: "calendar-event-outline",
  variant: "default",
  name: "Calendar Event Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CalendarEventOutlineLogo;
