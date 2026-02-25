/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Calendar1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Calendar1 = React.forwardRef<SVGSVGElement, Calendar1Props>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M11 14h1v4" />
  <path d="M16 2v4" />
  <path d="M3 10h18" />
  <path d="M8 2v4" />
  <rect x="3" y="4" width="18" height="18" rx="2" />
    </svg>
  )
);
Calendar1.displayName = "Calendar1";
export const Calendar1Metadata = { id: "calendar-1", baseId: "calendar-1", variant: "default", name: "Calendar 1", category: "calendar", tags: [], viewBox: "0 0 24 24" } as const;
export default Calendar1;
