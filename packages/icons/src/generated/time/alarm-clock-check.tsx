/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AlarmClockCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AlarmClockCheck = React.forwardRef<SVGSVGElement, AlarmClockCheckProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <circle cx="12" cy="13" r="8" />
  <path d="M5 3 2 6" />
  <path d="m22 6-3-3" />
  <path d="M6.38 18.7 4 21" />
  <path d="M17.64 18.67 20 21" />
  <path d="m9 13 2 2 4-4" />
    </svg>
  )
);
AlarmClockCheck.displayName = "AlarmClockCheck";
export const AlarmClockCheckMetadata = { id: "alarm-clock-check", baseId: "alarm-clock-check", variant: "default", name: "Alarm Clock Check", category: "time", tags: [], viewBox: "0 0 24 24" } as const;
export default AlarmClockCheck;
