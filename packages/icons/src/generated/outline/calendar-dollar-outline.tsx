/**
 * Auto-generated logo component: Calendar Dollar Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CalendarDollarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CalendarDollarOutlineLogo = React.forwardRef<SVGSVGElement, CalendarDollarOutlineLogoProps>(
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
      <path d="M13 21h-7a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3" />
  <path d="M16 3v4" />
  <path d="M8 3v4" />
  <path d="M4 11h12.5" />
  <path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
  <path d="M19 21v1m0 -8v1" />
    </svg>
  )
);

CalendarDollarOutlineLogo.displayName = "CalendarDollarOutlineLogo";

export const CalendarDollarOutlineLogoMetadata = {
  id: "calendar-dollar-outline",
  baseId: "calendar-dollar-outline",
  variant: "default",
  name: "Calendar Dollar Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CalendarDollarOutlineLogo;
