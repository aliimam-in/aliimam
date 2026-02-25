/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SignalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Signal = React.forwardRef<SVGSVGElement, SignalProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M2 20h.01" />
  <path d="M7 20v-4" />
  <path d="M12 20v-8" />
  <path d="M17 20V8" />
  <path d="M22 4v16" />
    </svg>
  )
);
Signal.displayName = "Signal";
export const SignalMetadata = { id: "signal", baseId: "signal", variant: "default", name: "Signal", category: "network", tags: [], viewBox: "0 0 24 24" } as const;
export default Signal;
