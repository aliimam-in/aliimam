/**
 * Auto-generated logo component: Calendar User Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CalendarUserOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CalendarUserOutlineLogo = React.forwardRef<SVGSVGElement, CalendarUserOutlineLogoProps>(
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
      <path d="M12 21h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4.5" />
  <path d="M16 3v4" />
  <path d="M8 3v4" />
  <path d="M4 11h16" />
  <path d="M17 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M22 22a2 2 0 0 0 -2 -2h-2a2 2 0 0 0 -2 2" />
    </svg>
  )
);

CalendarUserOutlineLogo.displayName = "CalendarUserOutlineLogo";

export const CalendarUserOutlineLogoMetadata = {
  id: "calendar-user-outline",
  baseId: "calendar-user-outline",
  variant: "default",
  name: "Calendar User Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CalendarUserOutlineLogo;
