/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AlarmClockOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AlarmClockOff = React.forwardRef<SVGSVGElement, AlarmClockOffProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M6.87 6.87a8 8 0 1 0 11.26 11.26" />
  <path d="M19.9 14.25a8 8 0 0 0-9.15-9.15" />
  <path d="m22 6-3-3" />
  <path d="M6.26 18.67 4 21" />
  <path d="m2 2 20 20" />
  <path d="M4 4 2 6" />
    </svg>
  )
);
AlarmClockOff.displayName = "AlarmClockOff";
export const AlarmClockOffMetadata = { id: "alarm-clock-off", baseId: "alarm-clock-off", variant: "default", name: "Alarm Clock Off", category: "time", tags: [], viewBox: "0 0 24 24" } as const;
export default AlarmClockOff;
