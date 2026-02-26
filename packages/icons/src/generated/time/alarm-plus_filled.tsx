/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AlarmPlusFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AlarmPlusFilled = React.forwardRef<SVGSVGElement, AlarmPlusFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M16 6.072a8 8 0 1 1 -11.995 7.213l-.005 -.285l.005 -.285a8 8 0 0 1 11.995 -6.643zm-4 3.928a1 1 0 0 0 -1 1v1h-1l-.117 .007a1 1 0 0 0 .117 1.993h1v1l.007 .117a1 1 0 0 0 1.993 -.117v-1h1l.117 -.007a1 1 0 0 0 -.117 -1.993h-1v-1l-.007 -.117a1 1 0 0 0 -.993 -.883z" />
  <path d="M6.412 3.191a1 1 0 0 1 1.273 1.539l-.097 .08l-2.75 2a1 1 0 0 1 -1.273 -1.54l.097 -.08l2.75 -2z" />
  <path d="M16.191 3.412a1 1 0 0 1 1.291 -.288l.106 .067l2.75 2a1 1 0 0 1 -1.07 1.685l-.106 -.067l-2.75 -2a1 1 0 0 1 -.22 -1.397z" />
    </svg>
  )
);
AlarmPlusFilled.displayName = "AlarmPlusFilled";
export const AlarmPlusFilledMetadata = { 
  id: "alarm-plus_filled", 
  baseId: "alarm-plus", 
  variant: "filled", 
  name: "Alarm Plus", 
  category: "time", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AlarmPlusFilled;
