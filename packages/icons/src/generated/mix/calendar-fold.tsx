/**
 * Auto-generated logo component: Calendar Fold (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CalendarFoldLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CalendarFoldLogo = React.forwardRef<SVGSVGElement, CalendarFoldLogoProps>(
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
      <path d="M3 20a2 2 0 0 0 2 2h10a2.4 2.4 0 0 0 1.706-.706l3.588-3.588A2.4 2.4 0 0 0 21 16V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />
  <path d="M15 22v-5a1 1 0 0 1 1-1h5" />
  <path d="M8 2v4" />
  <path d="M16 2v4" />
  <path d="M3 10h18" />
    </svg>
  )
);

CalendarFoldLogo.displayName = "CalendarFoldLogo";

export const CalendarFoldLogoMetadata = {
  id: "calendar-fold",
  baseId: "calendar-fold",
  variant: "default",
  name: "Calendar Fold",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CalendarFoldLogo;
