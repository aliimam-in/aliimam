/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CalendarCogProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CalendarCog = React.forwardRef<SVGSVGElement, CalendarCogProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="m15.228 16.852-.923-.383" />
  <path d="m15.228 19.148-.923.383" />
  <path d="M16 2v4" />
  <path d="m16.47 14.305.382.923" />
  <path d="m16.852 20.772-.383.924" />
  <path d="m19.148 15.228.383-.923" />
  <path d="m19.53 21.696-.382-.924" />
  <path d="m20.772 16.852.924-.383" />
  <path d="m20.772 19.148.924.383" />
  <path d="M21 10.592V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
  <path d="M3 10h18" />
  <path d="M8 2v4" />
  <circle cx="18" cy="18" r="3" />
    </svg>
  )
);
CalendarCog.displayName = "CalendarCog";
export const CalendarCogMetadata = { id: "calendar-cog", baseId: "calendar-cog", variant: "default", name: "Calendar Cog", category: "calendar", tags: [], viewBox: "0 0 24 24" } as const;
export default CalendarCog;
