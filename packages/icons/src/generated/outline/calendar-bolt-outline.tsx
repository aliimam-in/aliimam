/**
 * Auto-generated logo component: Calendar Bolt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CalendarBoltOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CalendarBoltOutlineLogo = React.forwardRef<SVGSVGElement, CalendarBoltOutlineLogoProps>(
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
      <path d="M13.5 21h-7.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5" />
  <path d="M16 3v4" />
  <path d="M8 3v4" />
  <path d="M4 11h16" />
  <path d="M19 16l-2 3h4l-2 3" />
    </svg>
  )
);

CalendarBoltOutlineLogo.displayName = "CalendarBoltOutlineLogo";

export const CalendarBoltOutlineLogoMetadata = {
  id: "calendar-bolt-outline",
  baseId: "calendar-bolt-outline",
  variant: "default",
  name: "Calendar Bolt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CalendarBoltOutlineLogo;
