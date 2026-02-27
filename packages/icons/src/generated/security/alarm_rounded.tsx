/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AlarmRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AlarmRounded = React.forwardRef<SVGSVGElement, AlarmRoundedProps>(
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
      <path d="M2 22H22"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 6C7.03 6 3 10.03 3 15V22H21V15C21 10.03 16.97 6 12 6Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 2V3"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 4L5 5"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 4L19 5"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
AlarmRounded.displayName = "AlarmRounded";
export const AlarmRoundedMetadata = { 
  id: "alarm_rounded", 
  baseId: "alarm", 
  variant: "rounded", 
  name: "Alarm", 
  category: "security", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AlarmRounded;
