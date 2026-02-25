/**
 * Auto-generated logo component: Calendar Exclamation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CalendarExclamationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CalendarExclamationOutlineLogo = React.forwardRef<SVGSVGElement, CalendarExclamationOutlineLogoProps>(
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
      <path d="M15 21h-9a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5" />
  <path d="M16 3v4" />
  <path d="M8 3v4" />
  <path d="M4 11h16" />
  <path d="M11 15h1" />
  <path d="M12 15v3" />
  <path d="M19 16v3" />
  <path d="M19 22v.01" />
    </svg>
  )
);

CalendarExclamationOutlineLogo.displayName = "CalendarExclamationOutlineLogo";

export const CalendarExclamationOutlineLogoMetadata = {
  id: "calendar-exclamation-outline",
  baseId: "calendar-exclamation-outline",
  variant: "default",
  name: "Calendar Exclamation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CalendarExclamationOutlineLogo;
