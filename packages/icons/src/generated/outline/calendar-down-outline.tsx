/**
 * Auto-generated logo component: Calendar Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CalendarDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CalendarDownOutlineLogo = React.forwardRef<SVGSVGElement, CalendarDownOutlineLogoProps>(
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
  <path d="M19 16v6" />
  <path d="M22 19l-3 3l-3 -3" />
  <path d="M16 3v4" />
  <path d="M8 3v4" />
  <path d="M4 11h16" />
    </svg>
  )
);

CalendarDownOutlineLogo.displayName = "CalendarDownOutlineLogo";

export const CalendarDownOutlineLogoMetadata = {
  id: "calendar-down-outline",
  baseId: "calendar-down-outline",
  variant: "default",
  name: "Calendar Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CalendarDownOutlineLogo;
