/**
 * Auto-generated logo component: Calendar Sad Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CalendarSadOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CalendarSadOutlineLogo = React.forwardRef<SVGSVGElement, CalendarSadOutlineLogoProps>(
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
      <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12m12 -4v4m-8 -4v4m-4 4h16m-9.995 3h.01m3.99 0h.01" />
  <path d="M10 18a3.5 3.5 0 0 1 4 0" />
    </svg>
  )
);

CalendarSadOutlineLogo.displayName = "CalendarSadOutlineLogo";

export const CalendarSadOutlineLogoMetadata = {
  id: "calendar-sad-outline",
  baseId: "calendar-sad-outline",
  variant: "default",
  name: "Calendar Sad Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CalendarSadOutlineLogo;
