/**
 * Auto-generated logo component: Calendar Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CalendarPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CalendarPlusOutlineLogo = React.forwardRef<SVGSVGElement, CalendarPlusOutlineLogoProps>(
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
      <path d="M12.5 21h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5" />
  <path d="M16 3v4" />
  <path d="M8 3v4" />
  <path d="M4 11h16" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

CalendarPlusOutlineLogo.displayName = "CalendarPlusOutlineLogo";

export const CalendarPlusOutlineLogoMetadata = {
  id: "calendar-plus-outline",
  baseId: "calendar-plus-outline",
  variant: "default",
  name: "Calendar Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CalendarPlusOutlineLogo;
