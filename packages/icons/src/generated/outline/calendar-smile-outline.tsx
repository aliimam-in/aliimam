/**
 * Auto-generated logo component: Calendar Smile Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CalendarSmileOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CalendarSmileOutlineLogo = React.forwardRef<SVGSVGElement, CalendarSmileOutlineLogoProps>(
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
  <path d="M10.005 17a3.5 3.5 0 0 0 4 0" />
    </svg>
  )
);

CalendarSmileOutlineLogo.displayName = "CalendarSmileOutlineLogo";

export const CalendarSmileOutlineLogoMetadata = {
  id: "calendar-smile-outline",
  baseId: "calendar-smile-outline",
  variant: "default",
  name: "Calendar Smile Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CalendarSmileOutlineLogo;
