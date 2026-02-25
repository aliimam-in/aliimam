/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MonitorSpeakerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MonitorSpeaker = React.forwardRef<SVGSVGElement, MonitorSpeakerProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M5.5 20H8" />
  <path d="M17 9h.01" />
  <rect width="10" height="16" x="12" y="4" rx="2" />
  <path d="M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" />
  <circle cx="17" cy="15" r="1" />
    </svg>
  )
);
MonitorSpeaker.displayName = "MonitorSpeaker";
export const MonitorSpeakerMetadata = { id: "monitor-speaker", baseId: "monitor-speaker", variant: "default", name: "Monitor Speaker", category: "monitor", tags: [], viewBox: "0 0 24 24" } as const;
export default MonitorSpeaker;
