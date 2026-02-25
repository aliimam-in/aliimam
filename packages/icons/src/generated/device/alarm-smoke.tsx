/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AlarmSmokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AlarmSmoke = React.forwardRef<SVGSVGElement, AlarmSmokeProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M11 21c0-2.5 2-2.5 2-5" />
  <path d="M16 21c0-2.5 2-2.5 2-5" />
  <path d="m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8" />
  <path d="M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z" />
  <path d="M6 21c0-2.5 2-2.5 2-5" />
    </svg>
  )
);
AlarmSmoke.displayName = "AlarmSmoke";
export const AlarmSmokeMetadata = { id: "alarm-smoke", baseId: "alarm-smoke", variant: "default", name: "Alarm Smoke", category: "device", tags: [], viewBox: "0 0 24 24" } as const;
export default AlarmSmoke;
