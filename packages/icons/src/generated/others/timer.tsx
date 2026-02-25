/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TimerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Timer = React.forwardRef<SVGSVGElement, TimerProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <line x1="10" x2="14" y1="2" y2="2" />
  <line x1="12" x2="15" y1="14" y2="11" />
  <circle cx="12" cy="14" r="8" />
    </svg>
  )
);
Timer.displayName = "Timer";
export const TimerMetadata = { 
  id: "timer", 
  baseId: "timer", 
  variant: "default", 
  name: "Timer", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Timer;
