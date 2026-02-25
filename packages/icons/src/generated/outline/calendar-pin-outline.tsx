/**
 * Auto-generated logo component: Calendar Pin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CalendarPinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CalendarPinOutlineLogo = React.forwardRef<SVGSVGElement, CalendarPinOutlineLogoProps>(
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
      <path d="M12.5 21h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
  <path d="M16 3v4" />
  <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879" />
  <path d="M19 18v.01" />
  <path d="M8 3v4" />
  <path d="M4 11h16" />
    </svg>
  )
);

CalendarPinOutlineLogo.displayName = "CalendarPinOutlineLogo";

export const CalendarPinOutlineLogoMetadata = {
  id: "calendar-pin-outline",
  baseId: "calendar-pin-outline",
  variant: "default",
  name: "Calendar Pin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CalendarPinOutlineLogo;
