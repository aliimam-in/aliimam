/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CalendarHeartProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CalendarHeart = React.forwardRef<SVGSVGElement, CalendarHeartProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12.127 22H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.125" />
  <path d="M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z" />
  <path d="M16 2v4" />
  <path d="M3 10h18" />
  <path d="M8 2v4" />
    </svg>
  )
);
CalendarHeart.displayName = "CalendarHeart";
export const CalendarHeartMetadata = { id: "calendar-heart", baseId: "calendar-heart", variant: "default", name: "Calendar Heart", category: "calendar", tags: [], viewBox: "0 0 24 24" } as const;
export default CalendarHeart;
