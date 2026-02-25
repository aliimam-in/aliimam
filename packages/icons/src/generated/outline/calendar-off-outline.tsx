/**
 * Auto-generated logo component: Calendar Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CalendarOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CalendarOffOutlineLogo = React.forwardRef<SVGSVGElement, CalendarOffOutlineLogoProps>(
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
      <path d="M9 5h9a2 2 0 0 1 2 2v9m-.184 3.839a2 2 0 0 1 -1.816 1.161h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 1.158 -1.815" />
  <path d="M16 3v4" />
  <path d="M8 3v1" />
  <path d="M4 11h7m4 0h5" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

CalendarOffOutlineLogo.displayName = "CalendarOffOutlineLogo";

export const CalendarOffOutlineLogoMetadata = {
  id: "calendar-off-outline",
  baseId: "calendar-off-outline",
  variant: "default",
  name: "Calendar Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CalendarOffOutlineLogo;
