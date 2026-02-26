/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BatteryFullProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BatteryFull = React.forwardRef<SVGSVGElement, BatteryFullProps>(
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
      <path d="M10 10v4" />
  <path d="M14 10v4" />
  <path d="M22 14v-4" />
  <path d="M6 10v4" />
  <rect x="2" y="6" width="16" height="12" rx="2" />
    </svg>
  )
);
BatteryFull.displayName = "BatteryFull";
export const BatteryFullMetadata = { 
  id: "battery-full", 
  baseId: "battery-full", 
  variant: "default", 
  name: "Battery Full", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BatteryFull;
