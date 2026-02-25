/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BatteryFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BatteryFilled = React.forwardRef<SVGSVGElement, BatteryFilledProps>(
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
      <path d="M17 6a3 3 0 0 1 2.995 2.824l.005 .176v.086l.052 .019a1.5 1.5 0 0 1 .941 1.25l.007 .145v3a1.5 1.5 0 0 1 -.948 1.395l-.052 .018v.087a3 3 0 0 1 -2.824 2.995l-.176 .005h-11a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-6a3 3 0 0 1 2.824 -2.995l.176 -.005h11z" />
    </svg>
  )
);
BatteryFilled.displayName = "BatteryFilled";
export const BatteryFilledMetadata = { 
  id: "battery_filled", 
  baseId: "battery", 
  variant: "filled", 
  name: "Battery", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BatteryFilled;
