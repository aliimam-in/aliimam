/**
 * Auto-generated logo component: Calendar Repeat Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CalendarRepeatOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CalendarRepeatOutlineLogo = React.forwardRef<SVGSVGElement, CalendarRepeatOutlineLogoProps>(
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
      <path d="M12.5 21h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3" />
  <path d="M16 3v4" />
  <path d="M8 3v4" />
  <path d="M4 11h12" />
  <path d="M20 14l2 2h-3" />
  <path d="M20 18l2 -2" />
  <path d="M19 16a3 3 0 1 0 2 5.236" />
    </svg>
  )
);

CalendarRepeatOutlineLogo.displayName = "CalendarRepeatOutlineLogo";

export const CalendarRepeatOutlineLogoMetadata = {
  id: "calendar-repeat-outline",
  baseId: "calendar-repeat-outline",
  variant: "default",
  name: "Calendar Repeat Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CalendarRepeatOutlineLogo;
