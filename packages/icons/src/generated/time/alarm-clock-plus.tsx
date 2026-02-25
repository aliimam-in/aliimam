/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AlarmClockPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AlarmClockPlus = React.forwardRef<SVGSVGElement, AlarmClockPlusProps>(
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
      <circle cx="12" cy="13" r="8" />
  <path d="M5 3 2 6" />
  <path d="m22 6-3-3" />
  <path d="M6.38 18.7 4 21" />
  <path d="M17.64 18.67 20 21" />
  <path d="M12 10v6" />
  <path d="M9 13h6" />
    </svg>
  )
);
AlarmClockPlus.displayName = "AlarmClockPlus";
export const AlarmClockPlusMetadata = { 
  id: "alarm-clock-plus", 
  baseId: "alarm-clock-plus", 
  variant: "default", 
  name: "Alarm Clock Plus", 
  category: "time", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AlarmClockPlus;
