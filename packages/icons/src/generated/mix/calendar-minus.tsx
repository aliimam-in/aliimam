/**
 * Auto-generated logo component: Calendar Minus (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CalendarMinusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CalendarMinusLogo = React.forwardRef<SVGSVGElement, CalendarMinusLogoProps>(
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
      <path d="M16 19h6" />
  <path d="M16 2v4" />
  <path d="M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5" />
  <path d="M3 10h18" />
  <path d="M8 2v4" />
    </svg>
  )
);

CalendarMinusLogo.displayName = "CalendarMinusLogo";

export const CalendarMinusLogoMetadata = {
  id: "calendar-minus",
  baseId: "calendar-minus",
  variant: "default",
  name: "Calendar Minus",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CalendarMinusLogo;
