/**
 * Auto-generated logo component: Calendar Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CalendarCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CalendarCheckOutlineLogo = React.forwardRef<SVGSVGElement, CalendarCheckOutlineLogoProps>(
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
      <path d="M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" />
  <path d="M16 3v4" />
  <path d="M8 3v4" />
  <path d="M4 11h16" />
  <path d="M15 19l2 2l4 -4" />
    </svg>
  )
);

CalendarCheckOutlineLogo.displayName = "CalendarCheckOutlineLogo";

export const CalendarCheckOutlineLogoMetadata = {
  id: "calendar-check-outline",
  baseId: "calendar-check-outline",
  variant: "default",
  name: "Calendar Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CalendarCheckOutlineLogo;
