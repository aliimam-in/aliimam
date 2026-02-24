/**
 * Auto-generated logo component: Calendar (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CalendarLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CalendarLogo = React.forwardRef<SVGSVGElement, CalendarLogoProps>(
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
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  )
);

CalendarLogo.displayName = "CalendarLogo";

export const CalendarLogoMetadata = {
  id: "calendar",
  baseId: "calendar",
  variant: "default",
  name: "Calendar",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CalendarLogo;
